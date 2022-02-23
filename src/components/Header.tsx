import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';


export default function Header(){
  return (
    <Flex
    as={"header"}
    w={"100%"}
    mx={"auto"}
    mt={"4"}
    px={"6"}
    align={"center"}
    >
      <Text
      fontSize={"3xl"}
      fontWeight={"bold"}
      letterSpacing={"tight"}
      w={"64"}> Bhealthy
      
      <Text as={"span"} color={"blue.500"} ml={"1"}>
        .
      </Text>
       </Text>

       <Flex
       as={"label"}
       flex={"1"}
       py={"4"}
       px={"8"}
       ml={"6"}
       maxWidth={"400"}
       alignSelf={"center"}
       color={"gray.200"}
       position={"relative"}
       bg={"gray.800"}
       borderRadius={"full"}
       >

         <Input
         color={'gray.500'}
         variant={"unstyled"}
         placeholder={"Buscar na plataforma"}
         _placeholder={{ color: 'gray.400' }}
         px={"4"}
         mr={"4"}
         />

        <Icon as={RiSearchLine}  fontSize={"20px"}/>

       </Flex>
        <Flex alignItems={"center"} ml={"auto"} >
          <HStack spacing={"4"}  mx={"8"} pr={"8"} py={"1"} color={"gray.300"} borderRightWidth={"1"} borderColor={"gray.700"} >
          <Icon as={RiNotificationLine} fontSize={"20px"}/>
          <Icon as={RiUserAddLine} fontSize={"20px"}/>
          </HStack>

          <Flex align={"center"}>
            <Box mr={"4"} textAlign={"right"}>
              <Text>Any name</Text>
              <Text color={"gray.300"} fontSize={"small"} >Any email</Text>
            </Box>
            <Avatar  size={"md"} name={"Antonio Silva"} src="https://github.com/Tonybsilva-dev.png"/>
          </Flex>
        </Flex>
    </Flex>
  )
}