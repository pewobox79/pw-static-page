import {useEffect, useState} from "react";
import DashboardItemLayout from "../../../Layout/DashboardItemLayout.jsx";
import CryptoDataList from "./CryptoDataList.jsx";

const CryptoOverview = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f2f2dfce82mshcb64156556ea80ap1968b8jsn5e6669fe879d',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        };

        fetch('https://alpha-vantage.p.rapidapi.com/query?market=CNY&function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setData(response)
                setLoading(false)
            })
            .catch(err => console.error(err));
    }, [])

    console.log(data)

    if(loading){
        return(<h1>data loading..</h1>)
    }
    if(data) {

        return (
            <DashboardItemLayout>
                <h1>{data["Meta Data"]["1. Information"]}</h1>
                <h3>{data["Meta Data"]["3. Digital Currency Name"]}</h3>
                <CryptoDataList dataValue={data[["Time Series (Digital Currency Weekly)"]]}/>
            </DashboardItemLayout>
        )
    }
}

export default CryptoOverview