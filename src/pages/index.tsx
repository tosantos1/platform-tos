import Head from 'next/head'
import { Header } from '../components/Header'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
          <title>Início | TOS</title>
      </Head>

      <Header />

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👊 Olá, bem vindo!</span>
          <h1>
              Aqui é a plataforma 
              ideal para você que 
              deseja ser um <span>dev</span>.
          </h1>
          <p>
            Assinatura por apenas <br /> 
            <span>R$9,90 mensais</span>
          </p>
          <SubscribeButton />
        </section>
        
        <img src="/images/rocket.png" alt="rocket.png" />
      </main>
    </>
  )
}
