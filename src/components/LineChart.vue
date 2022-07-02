<template>
  <div class="row">
    <div class="col-md col-md-10">
      <h2>{{ this.title }}</h2>
    </div>
    <div class="col-md col-md-2 text-right" v-if="toolHeader==true">
      <div class="text-right">
        <select class="form-control" id="basic-table" @change="$emit('select-range-changed', $event, selected_bcc, selected_scc)">
          <option disabled>Select Date Range</option>
          <option value="week">1 week</option>
          <option selected value="month">1 month</option>
          <option value="yoy">year on year</option>
          <option value="year">1 year</option>
          <option value="10year">10 year</option>
        </select>
      </div>
    </div>
  </div>
  <GChart
    type="LineChart"
    :options="options"
    :data="chartData"
  />
</template>


<script>
import { GChart } from 'vue-google-charts'

export default {
  name: "LineChart",
  
  components: { GChart },

  props: {
    toolHeader: Boolean,
    chartData: Array,
    title: String, 
    selected_bcc: String, 
    selected_scc: String
  },

  data() {
    return {
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
        crosshair: { trigger: 'both', orientation: 'both' },
        trendlines: {
          0: {type: 'exponential', color: '#333', opacity: 1},
          1: {type: 'linear', color: '#111', opacity: .3},
          2: {type: 'polynomial', color: '#222', opacity: .5}
        },
        backgroundColor: '#f1f8e9',
      }
    }
  },

  mounted() {
  },
  
  methods() {
  }
};
</script>
