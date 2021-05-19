import { FaGithub, FaFacebook } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SignInButton() {
	const isUserLoggedIn = true;

	return isUserLoggedIn ? (
		<button 
			type="button"
			className={styles.signInButton}
		>
			<FaGithub color="#04d361" />
			Tiago Oliveira
			<FiX color="#737380" className={styles.closeIcon} />
		</button>
	): (
			<button 
			type="button"
			className={styles.signInButton}
		>
			<FaGithub color="#6F57F9" />
			Login com Github
		</button>
    );
}