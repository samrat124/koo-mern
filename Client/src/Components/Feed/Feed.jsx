

import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiHash } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";

import "../Navbar/Navbar.css";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import VideoCard from "../videocard/VideoCard";
import { useState } from "react";
import Profile from "../Navbar/Profile";
import Search from "../Login/Google";
import Loading from "../Loading/Loading";
import InitialFocus1 from "../Login/PostComponent/PostChakra";
import InitialFocus3 from "../Login/PostComponent/PostChak";
import InitialFocus4 from "../Login/PostComponent/PostComment";
import { getDataApi } from "../../Api/getData";


const Feed = () => {
 
    const[data,setState]=useState([]);
    const[load,setLoad]=useState(true);
    
    useEffect(()=>{
    
    //   fetch("https://mock-server-app-fqpl.onrender.com/user?_Page=1&_limit=5").then((res)=>res.json()).then((data)=>{
    
    //        setState(data);
    // console.log(data);
    // setLoad(false);
    //   })

    getDataApi().then((res)=>{

      if(res.data)
      {
        
       setState(res.data);
       setLoad(false);

      }
      else{
        alert("data not fetched");
      }

      

    })
    
    },[])
    if(load){
      return <Loading/>
    }
  return (
    <div>
    <div className="main1">
    <div className="heading">
      <Heading as="h1" size="md">
      People you can follow
      </Heading>
    </div>
    <div className="i">
      <AiOutlineArrowRight />
    </div>
  </div> 


<Box display='flex' gap="10px" w='100%' m='auto' justifyContent="center" overflow="auto">
{data.map((ele)=>{
  return <Link to={`/navbar/individualuser/${ele._id}`}><Profile img={ele.image} name={ele.name} position={ele.profession} /></Link>
})}
</Box>


  <VideoCard 
    userName="Koo English"
    id="kooenglish"
    description="Welcome to the Koo family 🙂"
     url="https://youtu.be/K4TOrB7at0Y"
  ></VideoCard>



  <div className="follow">
<Link to="/navbar/following">  <Button

colorScheme="blue"
bg="blue"
  width="200px"
  m="auto"
  borderRadius="20px"
  
  mt="20px" onClick={(event)=>{

    if(event.target.innerText==="Follow"){
     event.target.innerText="Following"
     event.target.style.backgroundColor="#FFD700";
     event.target.style.color="black";
    }
    else{
     event.target.innerText="Follow"
     event.target.style.backgroundColor="blue";
     event.target.style.color="white";
    }

 }}
>
  Follow
</Button></Link>
  </div>
  </div>
    
  )
}

export default Feed