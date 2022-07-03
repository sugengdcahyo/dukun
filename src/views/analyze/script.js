import api from '@/config/api'

import BasicTable from '@/components/BasicTable'
import LineChart from '@/components/LineChart'
import FormPredict from '@/components/FormPredict'
import { GChart } from "vue-google-charts"

export default {
  name: "AnalyzeDisplay",

  components: { GChart, BasicTable, FormPredict, LineChart },

  data() {
    return {
      chartData: [],
      selected_bcc: this.$route.params.bcc,
      selected_scc: this.$route.params.scc,
      data_tables: [],
    }
  },

  mounted() {
    let columns = [["Date", "Rate"]]
    let rows = []
    let gte = new Date().setDate(new Date().getDate() - 7)
    let lte = new Date().getTime()
    
    api
      .get("/dashboard/histogram", {
        params: {
          bcc: this.selected_bcc, 
          scc: this.selected_scc, 
          gte: this.convertGlobalDate(gte), 
          lte: this.convertGlobalDate(lte)
        }
      })
      .then(
        (response) => (
          rows = this.convertHistoriesTimestamp(response.data.onemonth),
          this.chartData = columns.concat(rows),
          this.data_tables = response.data.data_tables
        )
      )
  },

  methods: {
    getPredicted: function(event, params) {
      event
      api.
        post('/analyze/predict/', {...params}).
        then( (response) => {
          this.chartData = response.data
          console.log(this.chartData)
        }).
        catch(err=>console.warn(err))
    },
    convertHistoriesTimestamp: function(histories) {
      let histoData = []

      for(const [index,value] of histories.entries()){
        histoData[index] = [
          new Date(value[0]).toLocaleDateString('id'), 
          value[1]
        ]
      }
      return histoData
    },
    convertGlobalDate(timestamp) {
      const date = new Date(timestamp)
      return date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate()
    },
  }
}
