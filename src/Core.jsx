import Carousel from './components/Carousel'
import Head from './shared/Header'
import './styles/core.css'

export default function Core() {
  return (
    <div className='container min-w-[320px] max-w-[1280px] mx-auto flex flex-col sm:p-0 bg-white'>
      <Head />
      <Carousel />
    </div>
  )
}
