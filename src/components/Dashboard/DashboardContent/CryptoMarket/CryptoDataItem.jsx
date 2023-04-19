import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";



const CryptoDataItem=({data})=>{
    return(
        <h3>{data["6. market cap (USD)"]}</h3>
    )
}

export default CryptoDataItem