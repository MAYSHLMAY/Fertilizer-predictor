import { useEffect, useState } from "react"

export default function useFetch() {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    useEffect(() => {
        let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';
        fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey).then(data => data.json()).then(data => {

            setCity(data.city);
            setCountry(data.country);
            
        })
    })
    return [city, country]
}