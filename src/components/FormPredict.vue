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

    <!--<div class="form-group row">
      <label for="range" class="col-sm-1 col-form-label">Rentang</label>
      <div class="col-sm-11">
        <input
          type="number"
          class="form-control"
          id="range"
          placeholder="Satuan Hari"
          require
        />
      </div>
    </div>-->

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
