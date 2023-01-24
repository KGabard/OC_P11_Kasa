import { PropsWithChildren } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="page-body">{children}</div>
      <Footer />
    </>
  )
}

export default PageLayout
