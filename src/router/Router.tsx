import { Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import Housing from "../pages/Housing"
import NotFound from "../pages/NotFound"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/housing/:id" element={<Housing />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default Router