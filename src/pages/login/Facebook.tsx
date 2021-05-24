import { Button } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";

export default function Facebook(){
    return(
        <Button
            w={250}
            colorScheme="facebook"
            leftIcon={<FaFacebook
            />}>
            Facebook
        </Button>
    )
}