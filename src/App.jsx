import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MintPage from "./components/MintPage"
import Partners from "./components/Partners"
import Roadmap from "./components/Roadmap"
import TokenGated from "./components/TokenGated"

function App() {



  return (
    <>
      <Header />
    <div className="px-3 md:px-0 flex flex-col space-y-36 container mx-auto overflow-hidden ">
      <Hero />
      <MintPage />
      <TokenGated />
      <Partners />
      <Roadmap />
    </div>
      <Footer />
      
    </>
  )
}

export default App
