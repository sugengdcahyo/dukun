<template>
  <div class="row mt-4">
    <div class="col-sm col-sm-2">
      menus
    </div>

    <div class="col-sm col-sm-10">
      <LineChart
        :title="'Graph of change in 1 '+selected_bcc+' to '+selected_scc"
        :chartData="chartData"
        :options="options"
        @select-range-changed="changeDateRange"
        :selected_scc=selected_scc
        :selected_bcc=selected_bcc
      />

      <BasicTable 
        :title="'one weeks'"
        :selected_bcc="selected_bcc"
        :selected_scc="selected_scc"
        :data_table="data_tables"
      />
    </div>
  </div>

</template>

<script src="./script.js">
</script>
