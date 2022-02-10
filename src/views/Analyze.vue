<template>
  <div class="input-group mb-3 mt-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1"> Data History </span>
    </div>
    <input type="text" class="form-control" placeholder="1000, 1240, 2220, ..." aria-label="Username" aria-describedby="basic-addon1">
    
    <div class="input-group-append">
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="FileData">
      </div>
    </div>
  </div>
    
  <button type="button" class="btn btn-primary btn-md">Prediksi</button>
  
  <Chart
    :size="{ width: 800, height: 400 }"
    :data="data"
    :margin="margin"
    :direction="direction">

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['name', 'pl']" />
    </template>

  </Chart>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Line } from 'vue3-charts'
import { plByMonth } from '@/data'

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line },
  setup() {
    const data = ref(plByMonth)
    const direction = ref('horizontal')
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    })

    return { data, direction, margin }
  }
})
</script>

<!--<style>
#app {
  color: #2ecc71
}
</style>-->
