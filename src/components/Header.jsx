import React from 'react'
import { Heading, Image, Text } from '@chakra-ui/react'
import logo from "../assets/light-bulb.svg"

const Header = () => {
  return (
    <>
        <Image src={logo} alt='logo' width={100} marginBottom='1rem'/> 
        <Heading color="white" marginBottom="1rem">
            ATSInsightPro
        </Heading>
        <Text fontSize={23} textAlign='center'>
            Paste in the job description below and we'll extract keyword for you
        </Text>
    </>
  )
}

export default Header