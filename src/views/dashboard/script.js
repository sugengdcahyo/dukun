import axios from "axios";
const BASE_URL = 'https://dlstm.sugengdcahyo.com/api'

export default {
  name: "DashboardDisplay",
  components: {},
  data() {
    return {
        "path_items": []
    }
  },

  mounted() {
    axios
      //.get("https://dlstm.sugengdcahyo.com/api/models")
      .get( BASE_URL + "/models")
      .then(
        (response) => (
          (this.models = response.models),
          console.log((this.models = response.data.models))
        )
      );
  },

  methods: {
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
  },
};