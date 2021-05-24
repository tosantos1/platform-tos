import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

export default function Google() {
    return (
        <Button
            w={250}
            _hover={{opacity: 0.9}}
            bg="#db4a39"
            leftIcon={<FaGoogle
            />}>
            Google
        </Button>
    )
}