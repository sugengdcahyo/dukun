<template>
  <h3>{{ this.title }}</h3>
  <table class="table table-hover table-responsive-md table-md">
    <thead>
      <tr class="bg-dark text-white">
        <th scope="col">Date</th>
        <th scope="col">Day of the week</th>
        <th scope="col">1 {{ this.selected_bcc }} to {{ this.selected_scc }}</th>
        <th scope="col">Changes</th>
        <th scope="col">Changes %</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td>{{ row.date }}</td>
        <td>{{ row.day }}</td>
        <td>{{ row.rate }}</td>
        <td>{{ row.change }}</td>
        <td>{{ row.change_percent }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import convertCurrency from '@/helper/currency.js'
export default {
  name: "BasicTable",
  
  props: {
    data_table: Array,
    title: String, 
    selected_bcc: String, 
    selected_scc: String
  },

  data() {
    return {
      rows: this.convertDataRows(this.data_table),
    }
  },

  mounted() {
  },
  
  methods: {
    convertCurrency: function(number) {
      console.log("conver")
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number)
    },
    convertPercentage: function (number) {
      return `${number>=0 ? '+' : '' }${number}%`
    },
    convertDataRows: function(data) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let buckets = [];
      for (const [index, item] of data.entries()) {
        console.log(data[index])
        const change = index == 0 ? 0 : data[index].rate - data[index-1].rate
        const percentage = change == 0 ? 0 : change / item.rate
        buckets.push(
          {
            "date": new Date(item.date).toLocaleDateString('id'),
            "day": days[new Date(item.date).getDay()],
            "rate": this.convertCurrency(item.rate),
            "change": this.convertCurrency(change.toFixed(2)),
            "change_percent": this.convertPercentage((percentage * 100).toFixed(2))
          }
        )
      }
      return buckets
    },

    setColorStatus(value){
      if(value==0){
        return "warning"
      }else if (value > 0) {
        return "success"
      } else {
        return "danger"
      }
    }
  }
};
</script>
