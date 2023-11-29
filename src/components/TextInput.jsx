import React from 'react'
import { useState } from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const TextInput = ({extractKeywords}) => {
  const [text, setText] = useState('');
  const toast = useToast(); 

  const submitText = () => {
    if(text === ''){
      toast({
        title: 'Text Field is empty',
        description : 'Please enter some text to extract keywords',
        status:'error',
        duration: 5000,
        isClosable: true
      })
    }
    else{
      extractKeywords(text);
    }
  }

  return (
    <>
      <Textarea
        bg='white'
        color='black'
        padding={5}
        marginTop={6}
        height={200}
        value={text}
        onChange={ (e) => setText(e.target.value) }
      />
      <Button
        bg='blue.400'
        color='black'
        padding={8}
        marginTop={5}
        width='100%'
        _hover={{bg: 'blue.600', color:'white'}}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  )
}

export default TextInput