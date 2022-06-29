<template>
  <div class="card-deck mt-4 mb-4 ">
    <div v-for="(data, index) in charts" :key="index" class="card" :class=" 'border-'+setColorStatus(data.exchange.percentage)">
      <h5 class="card-header" :class=" selected_bcc == 'xxx' ?  'bg-'+setColorStatus(data.exchange.percentage) : '' ">1 {{ data.bcc }} to {{ data.scc }}</h5>
      <div class="card-body">
        <h3 class="card-title"> <b>Rp{{ data.exchange.value }} </b> <span class="badge" :class="'badge-'+setColorStatus(data.exchange.percentage)"> {{ data.exchange.percentage }} </span></h3>
        <p class="card-text">{{data.bcc}} to {{data.scc}} one day before Rp{{data.exchange.one_day_before}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated at {{ convertDate(data.updated_at) }}</small>
      </div>
    </div>
  </div>
</template>

<script src='./script.js'></script>
