import { PropsWithChildren } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

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
