import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then(res => res.json())
      .then(json => {
        setData(json.rates);
      })
      .catch(err => console.error("API error:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
