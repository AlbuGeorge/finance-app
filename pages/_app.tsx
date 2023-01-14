import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Layout from '../components/Layout'

import { Provider } from 'react-redux'
import store from '../redux/store'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </main>
  )
}
