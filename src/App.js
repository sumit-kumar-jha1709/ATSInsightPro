import { Container, Box } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import KeywordModals from "./components/KeywordModals";


function App() {
  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options ={
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true ,
        Authorization : `Bearer ${'Add your openAI API key'}`
      },
      body:JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n' + text + '',
        temperature: 0.5,
        max_tokens: 1000,
        frequency_penalty: 0.8
      })
    }

    const response = await fetch('https://api.openai.com/v1/completions', options);

    const json = await response.json();
    const data = json.choices[0].text.trim();
    

    console.log(data);
    setKeywords(data);
    setLoading(false);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  
  

  return (
    <Box bg="#0A0A19" color="white" height="100vh" paddingTop={100}>
      <Container maxW='3xl' centerContent>
        <Header/>
        <TextInput extractKeywords={extractKeywords}/>
        <Footer/>
      </Container>
      <KeywordModals keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal}/>
    </Box>
  );
}

export default App;
