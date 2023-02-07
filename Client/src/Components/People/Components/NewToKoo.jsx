import React from 'react';
import FollowButton from "./FollowButton";
import { Flex,Heading,Text } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";
import { useState } from 'react';
import { useEffect } from 'react';
import { getDataApi } from '../../../Api/getData';

function NewToKoo() {

  const [data,setData]=useState([ {
    "id": 1,
    "image": "https://images.kooapp.com/koo-profile-media/profiles/37418771/5FED8329-80EE-4EC7-B807-BBBD18541636-profile.jpeg?tr=n-dp_square",
    "name": "Lula",
    "username": "@lulaofficial",
    "profession": ""
  }]);
  useEffect(()=>{
    // fetch(`https://mock-server-app-fqpl.onrender.com/popular`)
    // .then(res=>res.json())
    // .then((data)=>setData(data))

    getDataApi().then((res)=>{

      if(res.data)
      {
        
       setData(res.data);
       

      }
      else{
        alert("data not fetched");
      }

      

    })

  },[])

  return (
    <div>
      <Heading margin="20px" as='h4' size='md' alignContent="start">New To Koo</Heading>
      {data.map((person) => {
        return (
          <>

            <Flex borderRadius="8px 8px 0px 0px" borderBottom="1px solid #e8e8e3" color="#424242" w={570} h={77} maxWidth={900} alignItems="center" gap="30" m="auto">
              <Box boxSize="80px">
                <Image
                  src={person.image}
                  alt={person.name}
                  borderRadius="full"
                  h="60px"
                  m="10px"
                />
              </Box>
              <Box>
                <Box display={"flex"}>
                <Heading as='h3' size='sm' noOfLines={1}>{person.name}</Heading>
                <Image src="https://images.kooapp.com/VerifiedAccountSheild96x96.png" w={4} m="0px 0px 2px 4px"/>
                </Box>
                <Box w={350}>
                <Text fontSize='lg' fontWeight={400} >{`${person.username} - ${person.profession}`}</Text>
                </Box>
              </Box>
              <Box style={{ marginLeft: "10px" }}>
                <FollowButton />
              </Box>
            </Flex>
          </>
        );
      })}
    </div>
  )
}
export default NewToKoo;