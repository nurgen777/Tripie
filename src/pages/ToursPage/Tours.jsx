// ARSEN`S ROUTE
import { useRef } from 'react'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Thlist from '../../components/T-H-list/Thlist'
import Tlist from '../../components/T-List/Tlist'
import ToursMain from '../../components/ToursMain/ToursMain'
import './Tours.css'
import Discover from '../../components/Discover/Discover'

const Tours = () => {
  const NlRef = useRef(null);
  const ThRef = useRef(null);

  const handleScrollToNewsLetter = () => {
    NlRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToThlist = () => {
    ThRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="block lg:hidden">
        <ToursMain
          onScrollToNewsLetter={handleScrollToNewsLetter}
          onScrollToThlist={handleScrollToThlist}
        />
      </div>

      <div className='block lg:hidden w-[327px] mx-auto mb-[40px]'>
        <Tlist />
      </div>

      <div className="hidden lg:block">
        <ToursMain
          onScrollToNewsLetter={handleScrollToNewsLetter}
          onScrollToThlist={handleScrollToThlist}
        />
      </div>

      <div
        ref={ThRef}
        className="hidden lg:flex max-w-[1200px] justify-between mx-auto my-[100px]">
        <Thlist />
        <Tlist />
      </div>
      <Discover />
      <div ref={NlRef}>
        <NewsLetter />
      </div>
    </>
  )
}

export default Tours