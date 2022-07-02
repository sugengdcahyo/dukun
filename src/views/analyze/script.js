import api from '@/config/api'

import BasicTable from '@/components/BasicTable'
import LineChart from '@/components/LineChart'
import { GChart } from "vue-google-charts"

export default {
  name: "AnalyzeDisplay",

  components: { GChart, BasicTable, LineChart },

  data() {
    return {
      selected_bcc: this.$route.params.bcc,
      selected_scc: this.$route.params.scc,
      data_tables: [],
      chartDummy: [
        ["Date", "Range"],
        [
          1656115200000,
          14829.5
        ],
        [
          1656201600000,
          14834.601299
        ],
        [
          1656288000000,
          14807.7
        ],
        [
          1656374400000,
          14852.35
        ],
        [
          1656460800000,
          14880.5
        ],
        [
          1656547200000,
          14957.601798
        ],
        [
          1656633600000,
          14975.15
        ],
        [
          1656720000000,
          14975.15
        ],
        /**["Date", "Range", "Predict"],
        [1, 2, null],
        [2, 5, null],
        [3, 4, null],
        [4, 6, null],
        [5, 7, null],
        [6, 3, null],
        [7, 5, 5],
        [8, null, 6],
        [9, null, 7],
        [10, null, 8],
        [11, null, 2],**/
      ]
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
    convertHistoriesTimestamp: function(histories) {
      let histoData = []

      for(const [index,value] of histories.entries()){
        histoData[index] = [
          new Date(value[0]).toLocaleDateString('id').replaceAll('/', '-'), 
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
