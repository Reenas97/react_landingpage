import Header from "./components/Header"
import Main from "./components/Sections/Main"
import Services from "./components/Sections/Services"
import Portfolio from "./components/Sections/Portfolio"
import Testimonials from "./components/Sections/Testimonials"
import Contact from "./components/Sections/Contact"
import Footer from "./components/Footer"

export default function App(){
  return(
    <>
      <Header />
      <Main />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
