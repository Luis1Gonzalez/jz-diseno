import Carousel from '../components/Carousel'
import Presentation from '../components/Presentation'
import '../styles/core.css'

export default function Index() {
  return (

        <div className='container min-w-[320px] max-w-[1280px] flex flex-col p-0 bg-white lg:w-[65%]'>
            <Carousel />
            <Presentation />
        </div>

  )
}
