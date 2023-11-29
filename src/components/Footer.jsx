import React from 'react'
import { Box, Image, Text, Flex, Link } from '@chakra-ui/react'
import logo from "../assets/openai.png"
import linkdnLogo from "../assets/linkedinLogo.svg"

const Footer = () => {
  return (
    <Box marginTop={35}>
        <Flex justifyContent="center" alignItems="center">
            <Box marginRight={5}>
            <Flex justifyContent="center" alignItems="center" >
            <Image src={logo} alt='open ai logo' marginRight={1}/>
            <Text>
                Powered by OpenAI
            </Text>
            </Flex>
            </Box>
            <Box>
            <Flex justifyContent="center" alignItems="center" >
            <Image src={linkdnLogo} alt='open ai logo' marginRight={1}/>
            <Text>
              <Link href='https://www.linkedin.com/in/-sumitkumarjha/' isExternal>
                Sumit Kumar Jha
              </Link>
            </Text>
            </Flex>
            </Box>
        </Flex>
    </Box>
  )
}

export default Footer