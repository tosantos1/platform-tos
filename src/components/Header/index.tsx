import styles from './styles.module.scss';

export function Header() { 
	return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="tos" />
                <nav>
                    <a>Home</a>
                </nav>
                <button>Entrar</button>
            </div>
        </header>
	);
}