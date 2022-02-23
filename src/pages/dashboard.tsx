import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";


export default function Dashboard(){
  return (
  <Flex direction={"column"} h={"100vh "}>
    <Header />

    <Flex w={"100%"} my={"6"} maxWidth={"1480"} mx={"auto"} px={"6"}>
      <Sidebar />

      <SimpleGrid flex={"1"} gap={4} minChildWidth={"320px"}  >
        <Box 
        p={"8"} 
        bgColor={"gray.800"} 
        borderRadius={"4"} 
        // pb={"4"}
        >
          <Text>Usuarios cadastrados</Text>
        </Box>
        <Box 
        p={"8"} 
        bgColor={"gray.800"} 
        borderRadius={"4"} 
        // pb={"4"}
        >
          <Text>Taxa de abertura</Text>
        </Box>
      </SimpleGrid>
    </Flex>
  </Flex>
  )
}