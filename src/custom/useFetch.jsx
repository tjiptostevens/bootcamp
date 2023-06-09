import { useEffect } from "react";
import { useState } from "react";

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(endPoint);
        res = await res.json();
        console.log(res);
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return { data };
};

export default useFetch;
