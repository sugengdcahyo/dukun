<template>
  <form v-on="submitPredict">
    <div class="input-group mt-3">
      <input
        type="number"
        class="form-control"
        placeholder="0"
      />
      <select class="custom-select custom-select-md mb-2">
        <option disabled selected>Times</option>
        <option value="day">days</option>
        <option value="week">weeks</option>
        <option value="year">years</option>
      </select>
    </div>
    <select class="custom-select custom-select-md mb-2">
      <option disabled selected>Models</option>
      <option value="day">days</option>
      <option value="week">weeks</option>
      <option value="year">years</option>
    </select>
    <div>
      <a href="/" class="btn btn-primary btn-sm mr-2">Back</a>
      <button type="button" class="btn btn-primary btn-sm">Predict</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "FormPredict",
  props: {
    histories: String,
  },
};
</script>
