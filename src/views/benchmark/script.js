import api from "@/config/api"
import BasicTable from "@/components/BasicTable"
import LineChart from "@/components/LineChart"

export default {
  name: "BenchmarkDisplay",

  components: { BasicTable, LineChart },

  data() {
    return {
      currency: {
        name: ''
      },
      selectedCurrency: '',
      models: []
    }
  },

  mounted() {
    api
      .get("/analyze/benchmarks")
      .then(
        (response) => (
          this.chartData = response.data
        )
      )

    api
      .get("buckets/currency")
      .then(
        (response) => (
          this.currency = response.data
        )
      )
    
  },

  methods: {
    selectCurrency: function() {
      api
        .get('models', {
          params: {exchange: this.selectedCurrency.id}
        })
        .then(
          (response) => (
            this.models = response.data.models
          )
        )
    }
  }
}
