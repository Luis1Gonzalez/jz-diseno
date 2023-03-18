import Carousel from '../components/Carousel'
import Presentation from '../components/Presentation'
import Head from '../shared/Header'
import '../styles/core.css'

export default function Index() {
  return (
    <div>
        <div className='container min-w-[320px] max-w-[1280px] flex flex-col p-0 bg-white'>
            <Head />
            <Carousel />
            <Presentation />
        </div>
    </div>
  )
}
