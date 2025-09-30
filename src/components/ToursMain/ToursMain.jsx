// ARSEN`S ROUTE
import React from 'react'
import '../../pages/ToursPage/Tours.css'
import cityA from '../../assets/cityA.png'
import cityB from '../../assets/cityB.png'
import Thlist from '../T-H-list/Thlist'

const subjucts = [
  {
    img: '/sub1.svg',
    title: 'Location',
    text: 'Where are you going?'
  },
  {
    img: '/sub2.svg',
    title: 'Activity',
    text: 'Add Activity'
  },
  {
    img: '/sub3.svg',
    title: 'Dates',
    text: 'Add date'
  },
  {
    img: '/sub4.svg',
    title: 'Guest',
    text: 'Add guests'
  },
]

const ToursMain = ({ onScrollToNewsLetter, onScrollToThlist }) => {
  return (
    <div className='mb-[80px] lg:mb-0'>
      <div className='tl hidden lg:flex h-[330px] justify-center pt-[92px] text-[74px] text-[#FCFCFD] font-[600]' style={{ backgroundImage: `url(${cityA})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%' }}>
        Tour List
      </div>
      <div className='tl lg:hidden flex h-[277px] justify-center pt-[50px] text-[40px] text-[#FCFCFD] font-[600]' style={{ backgroundImage: `url(${cityB})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%' }}>
        Tour List
      </div>
      <div className='hb lg:w-[1120px] w-[327px] lg:pt-[40px] lg:px-[44px] lg:pb-[16px] p-[20px] rounded-[20px] bg-white mx-auto relative lg:mt-[-75px] mt-[-130px]'>
        <div className='lg:w-[1030px] lg:h-[120px] ml-[20px] mt-[20px] w-[287px] lg:border-b-[1px] lg:pb-[48px] lg:border-b-[#E6E8EC] mb-[16px] flex lg:justify-between lg:items-center lg:gap-0 gap-[35px] lg:flex-row flex-col'>
          {subjucts.map((item, i) => (
            <div key={i} className='flex items-start gap-[12px]'>
              <img className='pt-[2px]' src={item.img} alt="" />
              <div>
                <h4 className='text-[#23262F] text-[20px] font-[600]'>{item.title}</h4>
                <p className='text-[#777E90]'>{item.text}</p>
              </div>
            </div>
          ))}

          <button
            onClick={onScrollToThlist}
            className='hidden lg:flex w-[64px] h-[64px] bg-[#4AC63F] rounded-full p-[20px] cursor-pointer items-center justify-center'>
            <img src="/sub5.svg" alt="Search icon" />
          </button>
          <button
            onClick={onScrollToThlist}
            className='lg:hidden w-[287px] py-[16px] px-[24px] ml-[-20px] mt-[25px] bg-[#4AC63F] rounded-[90px]  flex items-center justify-center gap-[8px] text-white font-semibold text-[16px]'>
            <img src="/sub5.svg" alt="Search icon" />
            Search
          </button>

        </div>
        <button onClick={onScrollToNewsLetter} className='hidden lg:w-[30px] lg:h-[30px] lg:mx-auto lg:flex lg:justify-center lg:border-[2px] lg:border-black/20 lg:rounded-[50%] lg:cursor-pointer'><img width={9} height={10} src="/arrowBA.svg" alt="" /></button>
        <div className='block lg:hidden'>
          <Thlist />
        </div>
      </div>
    </div>
  )
}

export default ToursMain