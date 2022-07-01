<template>
  <h3>{{ this.title }}</h3>
  <table class="table table-hover table-md">
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
      <tr v-for="(row, index) in this.data_table" :key="index">
        <td> {{ new Date(row.date).toLocaleDateString('id') }} </td>
        <td> {{ new Date(row.date).getDay() }} </td>
        <td> {{ row.rate }} </td>
        <td> {{ row.rate }} </td>
        <td> {{ row.rate }} </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
      rows: this.data_table,
    }
  },

  mounted() {
  },
  
  methods() {
  }
};
</script>
