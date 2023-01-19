import { PropsWithChildren } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout
