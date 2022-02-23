import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import React from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string; 
}

export function Input({ name, label }: InputProps) {
  return (
    <FormControl>
    { !!label &&  <FormLabel htmlFor={name}> {label} </FormLabel>}
      <ChakraInput
      name={name}
      type={"text"}
      focusBorderColor="red.500"
      bg="gray.300"
      variant="filled"
      _hover={{ bg: 'red.700' }}
      size={"md"}
      >
        {label}
      </ChakraInput>
    </FormControl>
  )
}

export default Input;