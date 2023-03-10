import {useEffect, useState} from "react";

export const useFetch = (searchString) => {

    const backendURL = "https://pewobox.com/api/";
    const url = backendURL+searchString;
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setFetchedData(data))

    }, [])

    return fetchedData

}