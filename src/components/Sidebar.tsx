import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboard2Line, RiInputMethodLine } from "react-icons/ri";


 export function Sidebar(){
   return(
     <Box as={"aside"} w={64} mr={8}>
       <Stack spacing={8} align={"flex-start"}>
          <Box>
            <Text fontWeight={"bold"} color={"gray.400"} fontSize={"small"} > GERAL </Text>

            <Stack spacing={4} mt={8} align={"stretch"} >
              <Link href="#" display={"flex"} alignItems={"center"} color={"red.500"}> 
              <Icon as={RiDashboard2Line} fontSize={"20"}/>
              <Text ml={"4"} fontWeight={"medium"}> Dashboard </Text>
               </Link>
               <Link href="#" display={"flex"} alignItems={"center"}> 
              <Icon as={RiContactsLine} fontSize={"20"}/>
              <Text ml={"4"} fontWeight={"medium"}> Usuários </Text>
               </Link>
            </Stack>
          </Box>
          <Box>
            <Text fontWeight={"bold"} color={"gray.400"} fontSize={"small"} > AUTOMAÇÃO </Text>

            <Stack spacing={4} mt={8} align={"stretch"} >
              <Link href="#" display={"flex"} alignItems={"center"}> 
              <Icon as={RiInputMethodLine} fontSize={"20"}/>
              <Text ml={"4"} fontWeight={"medium"}> Formulários </Text>
               </Link>
            </Stack>
          </Box>
       </Stack>
     </Box>
   )
 }