import {useEffect, useState} from "react";
import DashboardItemLayout from "../../../Layout/DashboardItemLayout.jsx";
import CryptoDataList from "./CryptoDataList.jsx";
import {CryptoSelection} from "./CryptoSelection.jsx";
import {getCryptoChartValue} from "../../../../lib/DashboardDataHelper.js";
import {getDailyPrice} from "../../../../../apis/dataProvider.js";
import {dateGeneratorForCryptoApi} from "../../../../../apis/generators.js";


const CryptoOverview = () => {

    const todayDate = dateGeneratorForCryptoApi();

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [cryptoQuery, setCryptoQuery] = useState("BTC")

    useEffect(() => {
        const abortController = new AbortController();

        setLoading(true)
        const fetchedData = getCryptoChartValue(cryptoQuery, abortController)
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => console.log(err))

        return () => {
            abortController.abort();
        }

    }, [cryptoQuery])


console.log(data)


return (

    <DashboardItemLayout>
        {loading ? <DashboardItemLayout><h1>Loading Chart Data...</h1></DashboardItemLayout> : <>
            <h1>{data ? data["Meta Data"]["1. Information"] : null}</h1>
            <h3>Currency: {data ? data["Meta Data"]["3. Digital Currency Name"] : null}</h3>

            <h3>Price from {todayDate}: price here</h3>
            <CryptoDataList dataValue={data ? data["Time Series (Digital Currency Weekly)"] : null}/>
        </>}
        <CryptoSelection setCryptoQuery={setCryptoQuery} cryptoQuery={cryptoQuery}/>
    </DashboardItemLayout>

)

}

export default CryptoOverview