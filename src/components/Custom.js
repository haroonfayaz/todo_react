import { useState } from "react";

const useCustomCounter =()=>{
    const [serial,setData]=useState(0);
    const  countHandler=()=>{
        setData(serial +1);
    };
    return{
        serial,
        countHandler,
    };
};

export default useCustomCounter;
