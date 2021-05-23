import { Button } from '@chakra-ui/react';

import { ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'




export function SignInButton() {
	const isUserLoggedIn = true;

	return isUserLoggedIn ? (
		<Button
			size="md"
			height="48px"
			width="200px"
			variant="outline"
			color="green.100"
			_hover={{color: "green.100"}}
			textDecoration="none" 
			href="/login"
			p="4"
			border="2px"
			borderColor="#04d361"
			borderRadius="20"

			rightIcon={<
				CloseIcon 
				w={3} h={3}
				ml={2}
				/>}
		>
			Tiago Oliveira
		</Button>
	): (
			<Button
			size="md"
			height="48px"
			width="200px" 
			variant="outline"
			color="gray.300"
			_hover={{bg: "gray.050"}}
			textDecoration="none" 
			href="/login"
			p="4"
			border="2px"
			borderColor="white.800"
			borderRadius="20"

			rightIcon={<
				ChevronRightIcon color="#7058f9"			
				boxSize={6}
				/>}
		>
			 Acessar Plataforma
		</Button>
    );
}