import React, { useEffect, useState } from 'react';

const useFetchApi = (url) => {

    const [apiData, setApiData]     = useState(null);
    const [loading , setLoading ]   = useState(true);
    const [error , setError]        = useState(null);
    
    useEffect(()=>{

        const fetchData = async() =>{
            try{
                const response = await fetch(url);
                if(!response.ok) throw Error("Failed to fetch Data");
                const result = await response.json()
                setApiData(result);
                
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData();

    },[url]);

return [ apiData, loading, error ];
    
};

export default useFetchApi;
