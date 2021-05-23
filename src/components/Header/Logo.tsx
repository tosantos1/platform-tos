
import { Stack, Image } from "@chakra-ui/react";

export function Logo() {
    return (
        <Stack direction="row">
            <Image boxSize="100px"
            src="/images/logo.svg"
            
            alt="Logo" /> 
        </Stack>
    )
}