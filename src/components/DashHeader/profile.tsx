import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex align="center">
            <Box
                mr="4"
                textAlign="right"
                borderColor="red.900">

                <Text>Tiago Oliveira</Text>
                <Text color="gray.300" fontSize="small">
                    tiagolivesan@outlook.com
               </Text>

            </Box>

            <Avatar size="md" name="Tiago Oliveira" src="https://github.com/tosantos1.png"/>
        </Flex>
    )
}