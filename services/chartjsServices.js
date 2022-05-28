import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

const createChart = (ctx, config) => {
  Chart.register(DoughnutController, ArcElement, Tooltip, Legend)
  return new Chart(ctx, config)
}

export default createChart
