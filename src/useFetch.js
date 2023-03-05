import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function useFetch(url) {
    url = "http://localhost:5000/" + url;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        axios.get(url, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
          }).then((response) => {
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
