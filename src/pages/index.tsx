import { Button, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react'
import Input from '../components/Form/Input'

export default function SignIn() {
  return (
    <Grid
      backgroundColor="gray.900"
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
        backgroundColor="gray.700"
        maxWidth={"380px"}
        padding={16}
        marginTop={0}
      >
        <Image
            src='/logo_bhealthy_white.svg'
            alt='logo'
            width="100%"
            alignSelf='center'
            marginBottom={5}
          />
        <Stack spacing={1}>
          <Input
          name={"email"}
          bg={"gray.900"}
          placeholder={"E-mail"}
          />

          <Input
          mt={2}
          name={"password"}
          type={"password"}
          bg={"gray.900"}
          placeholder={"Password"}/>
        </Stack>
        <Button
            type="submit"
            marginTop={2}
            backgroundColor="#133B5C"
            _hover={{ backgroundColor: "#87cefa" }}
            variant={"filled"}
            borderRadius={"4px"}
            height="50px"
            width="100%"
            mt={"4"}
          >
            Entrar
        </Button>

        <Flex alignItems="center" marginTop={6} >
            <Text fontSize="sm" color="white">
              Ou então
          </Text>

            <Button
              height="50px"
              flex="1"
              backgroundColor="#2D4059"
              _hover={{ backgroundColor: "#87cefa" }}
              marginLeft={6}
              borderRadius="sm"
              marginTop={2}
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
    // <Flex 
    // w={"100vw"} 
    // h={"100vh"}
    // justifyContent={"center"}
    // alignItems={"center"}
    // > 
    //   <Flex
    //   as={"form"}
    //   w={"100%"}
    //   maxWidth={360}
    //   bg={"gray.800"}
    //   padding={8}
    //   borderRadius={4}
    //   flexDirection={"column"}
    //   >
    //     <Input name='email' autoComplete='off' focusBorderColor="purple.500" bgColor={"gray.900"} />
    //     <Input name='password' type={"password"} autoComplete='off' focusBorderColor="purple.500" bgColor={"gray.900"}/>

    //     <Button type='submit' mt="6" colorScheme={"purple"} > Entrar </Button>
    //   </Flex>
    // </Flex>   
  )
}
