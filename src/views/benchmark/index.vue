<template>
  <div class="row mt-4"> 

    <div class="col-sm col-sm-3 bg-color-dark">
      <form ref="form">
        <select class="custom-select custom-select-md mb-2 required"
          name="currencySelector"
          v-model="selectedCurrency"
          @change="selectCurrency"
        >
          <option 
            v-for="(data, index) in currency.currency"
            :key="index" :value="data">{{data.name}}</option>
        </select>
      </form>

      <!-- <h5> Models {{ selectedCurrency.name }}</h5> -->
      <div class="form-check" v-for="(model, index) in models" :key="index">
          <input class="form-check-input" type="checkbox" name="{{ model.name }}" :id="model.id" checked>
          <label class="form-check-label" :for="model.id">
            {{ model.name }}
          </label>
      </div>
    </div>

    <div class="col-sm col-sm"> 
      <LineChart
        :title="'Benchmark Models Forecasting'"
        :chartData="chartData"
      />
    </div>

  </div>

</template>

<script src='./script.js'></script>
