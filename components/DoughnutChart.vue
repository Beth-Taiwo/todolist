<template>
  <div>
    <canvas id="my-chart" width="600px" height="250px"></canvas>
  </div>
</template>

<script>
import createChartInstance from '../services/chartjsServices'

export default {
  name: 'DoughnutChart',
  data() {
    return {
      chart: null,
    }
  },
  computed: {
    dougChartData() {
      return {
        labels: [
          'Family (8)',
          'House-Keeping (6)',
          'Education (5)',
          'Travel (4)',
          'Money (4)',
          'Work (3)',
        ],
        datasets: [
          {
            label: 'Categories',
            data: [8, 6, 5, 4, 4, 3],
            backgroundColor: [
              '#E58D8D33',
              '#CB916733',
              '#8A904833',
              '#7367CB33',
              '#67CBAC33',
              '#A867CB33',
            ],
            hoverOffset: 4,
          },
        ],
      }
    },
  },
  mounted() {
    this.chart = this.createChart(this.dougChartData)
  },
  methods: {
    createChart(data) {
      const ctx = document.getElementById('my-chart').getContext('2d')

      const config = {
        type: 'doughnut',
        data,
        options: {
          cutout: '90%',
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                font: {
                  size: 18,
                  weight: 'bold',
                  family: 'avenir, sans-serif',
                },
                boxWidth: 25,
                boxHeight: 25,
                padding: 12,
              },
            },
          },
        },
      }
      return createChartInstance(ctx, config)
    },
  },
}
</script>

<style></style>
