import React, { useEffect, useState } from "react";

export default function Progressbar({ value=0})
{
    const[percent, setPercent]= useState(value);
    useEffect(()=>{
        if(percent < 100)
        {
         setTimeout( ()=>setPercent(newval=>newval+1),200);
        }

    },[percent]);

    return(
        <React.Fragment>
           <div className="progressbar">
            <div className="progressbarfill" style={{ width: `${percent}%`}}> {percent} % </div>
            </div> 
        </React.Fragment>
    );
}