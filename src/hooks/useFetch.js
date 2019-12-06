import {useState, useEffect} from 'react';

export default function useFetch ( url, options ) {

    let resultState = {
        error: false,
        isLoading: true,
        data: null
    }

    const [result, setResult] = useState(resultState);

    const setQuery = async( )=>{ 
        try{
            const res = await fetch(url, options);
            const data = await res.json();
            resultState = {...resultState, isLoading:false, data: await data}
            
        }catch(err){
            resultState = {...resultState, error:err}  
        }finally{
            //console.log(resultState);
            setResult(resultState);
        }
    }

    useEffect(()=>{
        setQuery();
    },[]);

    return {result};
}
