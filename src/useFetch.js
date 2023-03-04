import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function useFetch(url) {
    url = "https://corsanywhere.herokuapp.com/" + url;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const header = { 'Content-Type': 'application/x-www-form-urlencoded' }
    useEffect(() => {
        setLoading(true);
        axios.get(url, {"headers" : header}).then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
  }, [url]);

  return {data, loading, error};
}
