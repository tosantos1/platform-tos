import { Input, Link, Flex, Button, FormLabel, FormControl, Box, HStack, FormHelperText} from "@chakra-ui/react";

import { FaFacebook, FaGoogle } from 'react-icons/fa';

import { Header } from "../../components/Header";
import Facebook from "./facebook";
import Google from "./Google";

export default function SignIn() {
    return(
<>
            <Header />
            <Flex
            pt={20}
            align="center"
            justify="center"
            >
            <Flex
                as="form"
                w="100%"
                maxWidth={360}
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDir="column"
            >
                
            <FormControl isRequired>
                <FormLabel >Nome</FormLabel>
                <Input mb={2}/>
                <FormLabel >Email</FormLabel>
                <Input type="email" />
                <FormLabel mt={2}>Senha</FormLabel>
                <Input type="password" />
                
            </FormControl>

            <Button
                    type="submit"
                    mt="6"
                    bg="#7058f9"
                    size="lg"
                    _hover={{opacity: 0.8}}
            >Entrar
            </Button>
            <HStack mt={4} justify="space-between">
                <Facebook />
                <Google />
            </HStack>
      </Flex>
    </Flex>
        
        </>
    );
}