import { useState, useEffect } from 'react';

function GetApiData(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
    }

    getData();
  }, [url]);

  return data;
}

export default GetApiData;