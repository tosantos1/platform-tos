import { Button } from '@chakra-ui/react';
import styles from './styles.module.scss';

export function SubscribeButton() {
	return (
		<Button
			size="md"
			height="48px"
			width="200px"
			variant="ghost"
			bg="#7058f9"
			_hover={{
				bg:"disabled",
				opacity:"0.8"
			}}
			borderRadius="20"
		>
		 Assinar
		</Button>
    );
}