import React from "react";
import { useState,useEffect } from "react";

function Carousal(){
    const [index,updatedIndex]=useState(0);
    const imageArr=['https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];
    const incrementIndex=()=>{
        if(index==2)
        updatedIndex(0);
        else
        updatedIndex(index+1);
    };
    const decrementIndex=()=>{
        if(index==0)
        updatedIndex(3);
        else
        updatedIndex(index-1);
    }
    useEffect(()=>{
        const interval=setInterval(incrementIndex,3000);
        return ()=>clearInterval(interval);

    },[index]);
    return(
    <div style={{textAlign:'center'}}>
        <button onClick={decrementIndex}>Previous</button>
        <div style={{background:'red',height:'500px',width:'500px',marginLeft:'250px'}}>
           <img src={imageArr[index]} alt="" height={200} width={200}/>
        </div>
        <button onClick={incrementIndex}>Next</button>
    </div>)

}
export default Carousal;