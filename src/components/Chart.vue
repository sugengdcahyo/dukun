<script>
import Chart from 'vue-chart-3'
import planetChartData from '../planet-data.js'

export default {
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('analyze');
    new Chart(ctx, this.planetChartData);
  }
}
</script>
