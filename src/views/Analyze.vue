<template>
  <form method="POST" @submit="submitPredict">
    <div class="input-group mt-3">
      <input
        type="text"
        class="form-control"
        placeholder="1000, 1240, 2220, ..."
        v-model="histories"
      />
      <select class="custom-select custom-select-md mb-3" v-model="model">
        <option selected value="">Pilih Nilai Mata Uang</option>
        <option v-for="model in models" :key="model">
          {{ model }}
        </option>
      </select>
    </div>

    <div class="input-group mb-3">
      <input type="number" class="form-control" placeholder="Only integer" v-model="range" required>
    </div>

    <button
      type="button"
      class="btn btn-primary btn-md"
      v-on:click="submitPredict"
    >
      Prediksi
    </button>
  </form>
  <Chart
    :size="{ width: 800, height: 400 }"
    :data="results"
    :margin="margin"
    :direction="direction"
    :axis="axis"
  >
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['time', 'value']" />
    </template>
    
    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        :config="{
          value: {label: 'value', color: '#0077b6' },
        }"
      />
    </template>
  </Chart>
</template>

<script>
import axios from "axios";
import { Chart, Grid, Line, Tooltip } from "vue3-charts";
const BASE_URL = 'http://dlstm.sugengdcahyo.com/api'

export default {
  name: "ChartDisplay",
  components: { Chart, Grid, Line, Tooltip},
  data() {
    return {
      histories: [],
      models: [],
      model: "",
      range: "",
      results: [],
      direction: "horizontal",
      margin: {
        left: 0,
        top: 20,
        right: 20,
        bottom: 0,
      },

      axis: {
        secondary: {
          domain: ['dataMin', 'dataMax + 1000'],
          type: 'linear',
          ticks: 8
        }
      }
    };
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
</script>
