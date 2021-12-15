//css
import '../styles/utils/_icon-font.css'
import '../styles/globals.css'

//components
import Head from "next/head";
import {Footer, Header} from "../components";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
            <title>Linkedin</title>
          </Head>
          <Header />
            <Component {...pageProps} />
          <Footer />
      </>
  )
}

export default MyApp
