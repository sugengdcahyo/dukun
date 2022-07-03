<template>
  <form ref="form">
    <div class="input-group mt-3">
      <input
        type="number"
        class="form-control"
        placeholder="0"
        name="window"
        v-model="predict.timestep"
        required
      />
      <select class="custom-select custom-select-md mb-2 required" 
        name="type" 
        v-model="predict.type">
        <option disabled selected>Times</option>
        <option value="day">days</option>
        <option value="week">weeks</option>
        <option value="year">years</option>
      </select>
    </div>
    <select class="custom-select custom-select-md mb-2 required" 
      name="predictModel" 
      v-model="predict.model">
      <option disabled selected>Models</option>
      <option 
        v-for="(value, index) in models" :key="index" :value="value.name">{{value.name}}</option>
    </select>
    <div>
      <a href="/" class="btn btn-primary btn-sm mr-2">Back</a>
      <a
        type="submit" 
        class="btn btn-primary btn-sm"
        v-on:click="$emit('submitPredict', $event, predict)"
      >Predict</a>
    </div>
  </form>
</template>

<script>
// import api from '@/config/api'
export default {
  name: "FormPredict",
  props: {
    selected_bcc: String, 
    selected_scc: String,
  },

  data() {
    return {
      predict: {
        model: "",
        type: "",
        timestep: 1
      }
    }
  },

  mounted() {
    this.models = [
      {
        'name': `${this.selected_bcc} to ${this.selected_scc}`
      }
    ]
  },

  methods: {}
};
</script>
