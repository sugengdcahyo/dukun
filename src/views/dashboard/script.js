import axios from "axios";
import BasicTable from '@/components/BasicTable'
import { GChart } from "vue-google-charts";
const BASE_URL = process.env.VUE_APP_DLSTM_API

export default {
  name: "DashboardDisplay",

  components: { GChart, BasicTable },

  data() {
    return {
      chartData: [["Date", "Rate"]],
      dataTable: [],
      columns: [],
      rows: [],
      options: {
        width: 'auto',
        height: 500,
        hAxis: {
          title: 'timelines',
          logScale: true
        },
        vAxis: {
          title: 'rates',
          logScale: false
        },
        //crosshair: {
        //  color: '#000',
        //  trigger: 'selection'
        //},
        trendlines: {
          0: {type: 'exponential', color: '#333', opacity: 1},
          1: {type: 'linear', color: '#111', opacity: .3}
        },
        backgroundColor: '#f1f8e9',
      },
      path_items: [],
      charts: [],
      selected_bcc: "USD",
      selected_scc: "IDR"
    }
  },

  mounted() {
    let columns = [["Date", "Rate"]]
    let rows = []
    axios
      .get( BASE_URL + '/dashboard/histogram')
      .then(
        (response) => (
          rows = this.convertHistoriesTimestamp(response.data.onemonth),
          this.chartData = columns.concat(rows),
          this.dataTable = response.data.data_tables,
          console.log(this.dataTable)
        )
      )
    axios
      .get( BASE_URL + "/dashboard/charts")
      .then(
        (response) => (
          (this.charts = response.data)
        )
      )
  },

  computed: {
  },

  methods: {
    convertHistoriesTimestamp: function(histories) {
      let histoData = []

      for(const [index,value] of histories.entries()){
        histoData[index] = [this.convertSimpleDate(value[0]), value[1]]
      }
      return histoData
    },

    convertCurrency: function (number) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number)
    },

    selectBcc(bcc){
      this.selected_bcc = bcc
    },

    setColorStatus(statusValue){
      if (statusValue==0){
        return "warning"
      } else if (statusValue < 0) {
        return "danger"
      } else {
        return "success"
      }
    },

    submitPredict: function () {
      axios.post(
        BASE_URL+"/predict/", 
        {
          histories: this.histories,
          model: this.model,
          range: this.range
        }).then(
          (response) => (
            this.results=JSON.parse(JSON.stringify(response.data))
          )
        )
    },

    getDetailChart: function(bcc, scc) {
      let columns = [["Date", "Rate"]]
      let rows = []
      axios
        .get(BASE_URL+'/dashboard/histogram', {params: {bcc: bcc, scc: scc}})
        .then(
          (response) => (
            rows = this.convertHistoriesTimestamp(response.data.onemonth),
            this.chartData = columns.concat(rows),
            this.selected_bcc = bcc,
            this.selected_scc = scc
          )
        )
    },

    changeDateRange: function(bcc, scc, event) {
      const range = event.target.value
      let columns = [["Date", "Rate"]]
      let rows = []
      let gte = new Date()
      let lte = new Date().getTime()
      
      if (range == 'week') {
        gte = new Date().setDate(new Date().getDate() - 7)
      } else if (range=='month') {
        gte = new Date().setMonth(new Date().getMonth() - 1)
      } else if (range == 'year') {
        gte = new Date().setFullYear(new Date().getFullYear() - 1)
      } else if (range == '10year') {
        gte = new Date().setFullYear(new Date().getFullYear() - 10)
      } else if (range == 'yoy') {
        gte = new Date(new Date().getFullYear(), 0, 1); 
      }
      // console.log(gte, lte)
      axios
        .get(BASE_URL+'/dashboard/histogram', {params: {bcc: bcc, scc: scc, gte: this.convertGlobalDate(gte), lte: this.convertGlobalDate(lte)}})
        .then(
          (response) => (
            rows = this.convertHistoriesTimestamp(response.data.onemonth),
            this.chartData = columns.concat(rows),
            this.selected_bcc = bcc,
            this.selected_scc = scc
          )
        )
    },

    convertGlobalDate(timestamp) {
      const date = new Date(timestamp)
      return date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate()
    },

    convertSimpleDate(timestamp){
      const date = new Date(timestamp)
      return date.toLocaleDateString('id').replaceAll('/', '-')
    },

    convertDate(timestamp){
      const date = new Date(timestamp)
      return date.toLocaleDateString('id').replaceAll('/', '-') +" "+ date.toTimeString(+7)
    }
  },
};
