import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getbyId } from '../../../Api/getData';
import FollowButton from './FollowButton';
import Post from './Post';


function IndividualUser() {
      const {id}=useParams();
      const [user,setUser]=useState( {
        "id": 1,
        "image": "https://images.kooapp.com/koo-profile-media/profiles/37418771/5FED8329-80EE-4EC7-B807-BBBD18541636-profile.jpeg?tr=n-dp_square",
        "name": "Lula",
        "username": "@lulaofficial",
        "profession": ""
      })
      useEffect(()=>{
        // fetch(`https://mock-server-app-fqpl.onrender.com/user/${id}`)
        // .then((res)=>res.json())
        // .then((data)=>setUser(data))

        getbyId(id).then((res)=>{

          if(res.data)
          {
            
           setUser(res.data);
            
    
          }
          else{
            alert("data not fetched");
          }
    
          
    
        })


      },[id])

      
      return (
        <Box w="90%" margin='auto' mt='2%'> 
                    <Box >
                  <Image src={user.image} w="100%"/>
                  </Box>
            <Flex borderRadius="10px 10px 0px 0px" border="1px solid #e8e8e3" color="#424242" w="100%" h={77} maxWidth={900} alignItems="center" gap="30" m={0}>
                  <Box w="90%" m="auto">
                    <Box display={"flex"}>
                    <Heading as='h3' size='sm' marginLeft={2} noOfLines={1}>{user.name}</Heading>
                    <Image src="https://images.kooapp.com/VerifiedAccountSheild96x96.png" w={4} m="0px 0px 2px 4px"/>
                    </Box>
                    <Box w={450}>
                    <Text fontSize='lg' marginLeft={1} fontWeight={400} >{`${user.username} - ${user.profession}`}</Text>
                    </Box>
                  </Box>
                  <Box style={{ marginLeft: "10px" }}>
                    <FollowButton />
                  </Box>
                </Flex>
                <Box marginLeft={2} lineHeight={10}>
                    {user.profession}
                </Box>
                <Box w={570} marginLeft={2} noOfLines="2">
                    {user.description}
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="flex-start" maxW="270px" marginTop={5} marginBottom={5}>
                    <Box flexGrow={5} marginLeft="7px">
                      <Box display="flex" gap="1">
                        <span ><b>{user.followers}</b></span>
                        
                        <span >Followers</span>
                        </Box>
                    </Box>
                    <Box flexGrow={5} marginRight="1em">
                      <Box display="flex" gap="1">
                        <span><b>{user.following}</b></span>
                        <span>Following</span>
                        </Box>
                    </Box>
                </Box>
        </Box>
      )
    }
    export default IndividualUser;