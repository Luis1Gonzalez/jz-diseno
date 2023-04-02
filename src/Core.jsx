import Index from "./pages/Index"
import Head from "./shared/Header"
import Footer from "./shared/Footer"
import LateralBar from "./shared/LateralBar"


export default function Core() {
  return (
    <div className="lg:flex flex-wrap">
      <Head />
      <LateralBar />
      <Index />      
      <Footer />
    </div>
  )
}
