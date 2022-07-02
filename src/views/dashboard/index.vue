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
          <a :href="'analyze/'+data.bcc+'/'+data.scc" class="btn btn-primary mr-2">Analyze</a>
          <button v-on:click="getDetailChart(data.bcc, data.scc)" class="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
    <hr>

    <LineChart
      :title="'Graph of change in 1 '+selected_bcc+' to '+selected_scc"
      :chartData="chartData"
      :options="options"
      :toolHeader=true
      @select-range-changed="changeDateRange"
      :selected_scc=selected_scc
      :selected_bcc=selected_bcc
    />
    <div>
    <hr>
    <BasicTable
      :title="'Table 7 days ago'"
      :selected_bcc="selected_bcc"
      :selected_scc="selected_scc"
      :data_table="dataTable"
    />
  </div>
</template>

<script src='./script.js'></script>
