import axios from "axios";
const BASE_URL = process.env.VUE_APP_DLSTM_API

export default {
  name: "Exchange",
  components: {},
  data() {
    const gte = new Date()
    const lte = new Date()
    gte.setDate(gte.getDate() - 7)
    return {
      // path_items: this.$route.params,
      gte: gte.getFullYear()+"-"+gte.getMonth()+"-"+gte.getDate(),
      lte: lte.getFullYear()+"-"+lte.getMonth()+"-"+lte.getDate(),
      oneweeks: {}
    }
  },

  mounted() {
    axios
    .get( BASE_URL + "/histories", {params: {
      gte: self.gte, 
      lte: self.lte, 
      bcc: this.$route.params.bcc,
      scc: this.$route.params.scc
    }})
    .then(
      (response) => (
        (this.oneweeks = response.data),
        console.log(this.oneweeks)
      )
    )
  },

  methods: {
    getLocalDay(timestamp) {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const date = new Date(timestamp)
      return days[date.getDay()]
    },
    getLocalDate(timestamp) {
      const date = new Date(timestamp)
      console.log(date.getDay)
      return date.toLocaleDateString() 
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
  },
};