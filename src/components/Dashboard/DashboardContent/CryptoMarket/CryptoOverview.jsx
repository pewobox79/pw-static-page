import {useEffect, useState} from "react";
import DashboardItemLayout from "../../../Layout/DashboardItemLayout.jsx";
import CryptoDataList from "./CryptoDataList.jsx";
import {CryptoSelection} from "./CryptoSelection.jsx";
import {getCryptoChartValue} from "../../../../lib/DashboardDataHelper.js";

const CryptoOverview = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [cryptoQuery, setCryptoQuery] = useState("BTC")

    useEffect(() => {
        setLoading(true)
        const fetchedData = getCryptoChartValue(cryptoQuery)
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [cryptoQuery])

    console.log(data)

    if (loading) {
        return (
            <DashboardItemLayout>
                <h1>Loading Chart Data...</h1>
            </DashboardItemLayout>
        )
    }

    if (data) {
        return (

            <DashboardItemLayout>
                <h1>{data["Meta Data"]["1. Information"]}</h1>
                <h3>Currency: {data["Meta Data"]["3. Digital Currency Name"]}</h3>
                <CryptoDataList dataValue={data[["Time Series (Digital Currency Weekly)"]]}/>
                <CryptoSelection setCryptoQuery={setCryptoQuery} cryptoQuery={cryptoQuery}/>
            </DashboardItemLayout>

        )
    }
}

export default CryptoOverview