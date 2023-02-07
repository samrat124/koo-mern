import React, { useState,useEffect } from 'react'
import { getPopularDataApi } from '../../Api/getData';
import Card from '../Card/Card'
import Loading from '../Loading/Loading';

const Popular = () => {
    const[popularData,setPopularData]=useState([]);
    const[load,setLoad]=useState(true);
    let fetchData=async()=>{
        // let res=await fetch('https://mock-server-app-fqpl.onrender.com/mostPopular')
        // let popular=await res.json();
        // setPopularData(popular);
        // setLoad(false);
        // console.log(popular )

        getPopularDataApi().then((res)=>{

          if(res.data)
          {
            
           setPopularData(res.data);
           setLoad(false);
    
          }
          else{
            alert("data not fetched");
          }
    
          
    
        })

    }
    useEffect(() => {
      fetchData();
    }, [])

    if(load){
      return <Loading/>
    }
  return (
    <div>
     {popularData.map((ele,index)=>{
        return <Card {...ele} key={index+5}/>
     })}
    </div>
  )
}

export default Popular