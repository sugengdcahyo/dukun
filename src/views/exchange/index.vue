<template>
  <div class="mt-4 mb-4">
    <h4> <b> List of exchange rate {{ oneweeks.bcc}} to {{ oneweeks.scc }} </b> </h4>
  </div>
  <form method="post">
    <div class="form-group"> <!-- Date input -->
      <label class="control-label" for="date">Date</label>
      <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
    </div>
    <div class="form-group"> <!-- Submit button -->
      <button class="btn btn-primary " name="submit" type="submit">Submit</button>
    </div>
  </form>
  <table class="table table-striped table-hover table-md">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Day of the week</th>
        <th scope="col">1 {{ this.$route.params.bcc }} to {{ this.$route.params.scc }}</th>
        <th scope="col">Changes</th>
        <th scope="col">Changes %</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(rate, index) in oneweeks.data" :key="index">
        <td scope="row">{{ getLocalDate(rate.date) }}</td>
        <td scope="row">{{ getLocalDay(rate.date) }}</td>
        <td>{{ rate.value }}</td>
        <td :class="'text-'+setColorStatus(rate.change_percentage)">{{ rate.change_rate }} {{ this.$route.params.scc }}</td>
        <td :class="'text-'+setColorStatus(rate.change_percentage)">{{ rate.change_percentage }} %</td>
      </tr>
    </tbody>
  </table>
  
</template>

<script src='./script.js'></script>
