import CryptoDataItem from "./CryptoDataItem.jsx";
import 'chart.js/auto'
import {Line} from "react-chartjs-2";


const CryptoDataList = ({dataValue}) => {


    let labels = []
    let dataSet = []

    for (let key in dataValue) {
        console.log("key", dataValue[key])
        labels.push(key)
        const marketCapValue = dataValue[key]["6. market cap (USD)"]
        dataSet.push(marketCapValue)
    }

    const data = {
        labels: labels.reverse(),
        datasets: [{
            label: 'Crypto Overview MarketShare All',
            data: dataSet.reverse(),
            fill: false,
            borderColor: '#1ABC9C',
            tension: 0.1
        }]
    };

    if(data){
        return (
            <Line data={data}/>
        )
    }

}

export default CryptoDataList