import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((d)=>d.json())
        .then((d)=>{
            setData(d[currency]);
        })
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;