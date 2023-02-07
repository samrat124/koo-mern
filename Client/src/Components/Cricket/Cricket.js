import React, { useEffect, useState } from "react";
import { getCricketDataApi } from "../../Api/getData";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
export default function Cricket() {
    const [data, setData] = useState([]);
    const[load,setLoad]=useState(true);

    useEffect(() => {
        getdata();
      }, []);
    
      const getdata = () => {
         
        // fetch("https://mock-server-app-fqpl.onrender.com/cricket")
        //   .then((d) => {
        //     return d.json();
        //   })
        //   .then((res) => {
        //     setdata(res);
        //     setLoad(false)
        //     console.log(res);
        //   });

        getCricketDataApi().then((res)=>{

          if(res.data)
          {
            console.log(res.data);
           setData(res.data);
           setLoad(false);
    
          }
          else{
            alert("data not fetched");
          }
    
          
    
        })
      };
    if(load){
      return <Loading/>
    }

  return (
    <>
     
     {
       data.map((data)=>{
       return  (<Card image={data.image} name={data.name} username={data.username} description={data.description} image2={data.image2} hashtags={data.hastags} profession={data.profession} />)
        })
       } 

     
    </>
  )
}

