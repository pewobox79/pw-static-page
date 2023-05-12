import {useEffect, useState} from "react";

export const useFetch = (searchString) => {

    const backendURL = "https://pewobox.com/api/";
    const url = backendURL+searchString;
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url, {signal: abortController.signal})
            .then(res => res.json())
            .then(data => setFetchedData(data))
        return ()=>{
                abortController.abort()
        }
    }, [])

    return fetchedData

}