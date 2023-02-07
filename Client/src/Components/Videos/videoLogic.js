import React from 'react'
import VideoCard from '../videocard/VideoCard';
import { useState,useEffect } from 'react';
import VideosCard from './Videos';
import Loading from '../Loading/Loading';
import { getCricketDataApi } from '../../Api/getData';

function VideoLogic() {

    const [data, setdata] = useState([]);
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
        //     setLoad(false);
        //     console.log(res);
        //   });

        getCricketDataApi().then((res)=>{

          if(res.data)
          {
            console.log(res.data);
           setdata(res.data);
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
       return  (<VideosCard image={data.image} name={data.name} username={data.username} description={data.description} image2={data.image2} hashtags={data.hastags} profession={data.profession} />)
        })
       }

     
    </>
  )
}

export default VideoLogic