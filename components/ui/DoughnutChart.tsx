'use client'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import {Doughnut} from 'react-chartjs-2'

ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        labels: [
            'Bank1', 'Bank2', 'Bank3'
        ],
        datasets: [
            {
                label: 'Banks',
                data: [1399, 1380, 1216],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ]
    }
  return (
    <Doughnut 
        data={data} 
        options={{
            cutout: '60%',
            plugins: {
                legend:{
                    display:false
                }
            }
        }}
    />
)
}

export default DoughnutChart