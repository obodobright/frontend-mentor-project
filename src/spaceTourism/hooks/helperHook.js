import { useState, useEffect } from "react";

export const useFetchUrl = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchUrl = async() => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setData(data);
        };

        fetchUrl();
    }, [url]);
    return { data, setData };
};