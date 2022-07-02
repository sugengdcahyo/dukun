<template>
  <form v-on="submitPredict">
    <div class="input-group mt-3">
      <input
        type="text"
        class="form-control"
        placeholder="1000, 1240, 2220, ..."
      />
      <select class="custom-select custom-select-md mb-3">
        <option selected>Pilih Nilai Mata Uang</option>
        <option value="usd">IDR/JPY</option>
        <option value="jpy">IDR/USD</option>
      </select>

    </div>

    <button type="button" class="btn btn-primary btn-md">Prediksi</button>
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
