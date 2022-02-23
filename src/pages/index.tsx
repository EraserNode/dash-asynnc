import { Button, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react'
import Input from '../components/Form/Input'

export default function SignIn() {
  return (
    <Grid
      backgroundColor="#FFFFFF"
      as="main"
      height="100vh"
      templateColumns=" 1fr 380px"
      templateRows="1fr"
      templateAreas="
    'form logo'
    'form logo'
    'form logo'
    "
      justifyContent="center"
      alignItems="center"

    >
      <Flex
        as={"form"}
        justifyContent="center"
        gridArea="logo"
        height="100%"
        flexDir="column"
        alignItems="stretch"
        backgroundColor="#FFFFFF"
        maxWidth={"380px"}
        padding={16}
        marginTop={0}
      >
        <Image
            src='/logo_bhealthy.svg'
            alt='logo'
            width="100%"
            alignSelf='center'
            marginBottom={5}
          />
        <Stack spacing={1}>
          <Input
          name={"email"}
          bg={"gray.300"}
          placeholder={"E-mail"}
          />

          <Input
          mt={2}
          name={"password"}
          type={"password"}
          bg={"gray.300"}
          placeholder={"Password"}/>
        </Stack>
        <Button
            type="submit"
            marginTop={2}
            backgroundColor={"red.500"}
            _hover={{ backgroundColor: "#d41610" }}
            variant={"filled"}
            borderRadius={"4px"}
            height="50px"
            width="100%"
            mt={"4"}
            color={"white"}
          >
            Entrar
        </Button>

        <Flex alignItems="center" marginTop={6} >
            <Text fontSize="sm" color="black">
              Ou então
          </Text>

            <Button
              height="50px"
              flex="1"
              backgroundColor={"red.500"}
              _hover={{ backgroundColor: "#d41610" }}
              marginLeft={6}
              borderRadius="sm"
              marginTop={2}
              color={"white"}
            >
              Recuperar acesso
          </Button>          
          </Flex>
      </Flex>

      <Flex
        gridArea="form"
        flexDir="column"
        alignItems="center"
        overflowY="auto"
        height={"100vh"}
      >
        <Image
            height={"100%"}
            src='/cover.jpeg'
            alt='logo'
            objectFit={"cover"}
          />
      </Flex>
    </Grid> 
  )
}
