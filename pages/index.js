import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner/banner';

export default function Home() {

  const handleBannerBtnClick = () => { 
    console.log('BANNER BUTTON CLICKED.'); 
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Coffee</title>
        <meta name="description" content="Discover coffee shops in Rochester, New York." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText='Get Coffee' handleOnClick={handleBannerBtnClick}/>
      </main>
    </div>
  )
}
