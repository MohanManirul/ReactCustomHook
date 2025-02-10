import React, { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json.slice(0, 5))); // Fetch first 5 items
    }, [url]);


    return [data] ;
};

export default useFetch;