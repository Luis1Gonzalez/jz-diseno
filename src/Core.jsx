import Index from "./pages/Index"
import Head from "./shared/Header"
import Footer from "./shared/Footer"

export default function Core() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row relative lg:py-5">
      <Head />
      <Index />
      </div>
      <Footer />
    </div>
  )
}
