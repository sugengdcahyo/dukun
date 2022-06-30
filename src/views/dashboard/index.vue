<template>
  <div class="card-deck mt-4 mb-4 ">
    <div v-for="(data, index) in charts" :key="index" class="card" :class=" 'border-'+setColorStatus(data.exchange.percentage)">
      <h5 class="card-header"> <strong> 1 {{ data.bcc }} to {{ data.scc }} </strong> </h5>
      <div class="card-body">
        <h3 class="card-title"> <b>{{ convertCurrency(data.exchange.value)}} </b> <span class="badge" :class="'badge-'+setColorStatus(data.exchange.percentage)"> {{ data.exchange.percentage }} </span></h3>
        <p class="card-text">The exchange rate of {{data.bcc}} to {{data.scc}} on the previous day was {{ convertCurrency(data.exchange.one_day_before)}}</p>
        <small class="text-muted">Last updated at <strong> {{ convertDate(data.updated_at) }} </strong> </small>
      </div>
      <div class="card-footer text-right">
        <button v-on:click="getDetailChart(data.bcc, data.scc)" class="btn btn-primary">Detail</button>
      </div>
    </div>
  </div>
  <hr>
  
  <div>
    <div class="row">
      <div class="col-sm col-8">
        <h2>Graph of change in 1 {{ selected_bcc }} to {{ selected_scc }}</h2>
      </div>
      <div class="col-sm col-4 text-right">
        <div class="text-right">
          <select class="form-control" @change="changeDateRange(selected_bcc, selected_scc, $event)">
            <option selected disabled>Select Date Range</option>
            <option value="week">1 week</option>
            <option value="month">1 month</option>
            <option value="year">1 year</option>
            <!-- <option v-for="country in countries" :value="country.code" :key="country.code">{{ country.name }}</option> -->
          </select>
          <!-- <br><br>
          <p><span>Selected country name: {{selectedCountry }}</span></p>
          <p><span>User country: {{ user.address.country }}</span></p> -->
        </div>
      </div>
    </div>
    <GChart
      type="LineChart"
      :options="options"
      :data="chartData"
    />
  </div>
</template>

<script src='./script.js'></script>
