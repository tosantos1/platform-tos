import { Flex, Link, Spacer } from '@chakra-ui/react';
import { SignInButton } from '../SignInButton';
import { Logo } from './Logo';


export function Header() { 
	return (
        <Flex as="header" w="100%" maxWidth={1120} h="20" mx="auto" mb="6"  px="6" align="center">
            <Logo />
            <Spacer />
            <SignInButton />
        </Flex>
	);
}