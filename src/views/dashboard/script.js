import axios from "axios";
const BASE_URL = process.env.VUE_APP_DLSTM_API

export default {
  name: "DashboardDisplay",
  components: {},
  data() {
    return {
        path_items: [],
        charts: [],
        selected_bcc: "",
    }
  },

  mounted() {
    axios
    .get( BASE_URL + "/dashboard/charts")
    .then(
      (response) => (
        console.log(response.data),
        (this.charts = response.data)
      )
    )
    axios
      .get( BASE_URL + "/models")
      .then(
        (response) => (
          (this.models = response.models),
          console.log((this.models = response.data.models))
        )
      );
  },

  methods: {
    selectBcc(bcc){
      self.selected_bcc = bcc
    },
    setColorStatus(statusValue){
      if (statusValue==0){
        return "warning"
      } else if (statusValue < 0) {
        return "danger"
      } else {
        return "success"
      }
      // return statusValue >= 0 ? true : false
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
            this.results=JSON.parse(JSON.stringify(response.data)),
            console.log(this.results),
            console.log(this.results.length)
          )
        )
    },
    convertDate(timestamp){
      const date = new Date(timestamp)
      return date.toLocaleDateString('id').replaceAll('/', '-')
    }
  },
};