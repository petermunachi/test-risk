import { buttonList } from '@/app/lib/constants'
import Image from 'next/image'
import Box from '../shared/Box'

export default function Banner() {
  return (
    <>
      <div className='flex justify-center pt-14'>
        <div className='w-[98%]'>
          <div className='relative w-full h-[20rem] z-50'>
            <Image
              src="/imgs/banner-sub-header.svg"
              fill
              alt="Banner sub header"
              objectFit='cover'
              loading="eager"
              priority
            />
          </div>
        
        </div>
      </div>
      <div className='flex justify-center -mt-[6rem]'>
        <div className='relative w-[149px] h-[149px] z-50'>
          <Image
            src="/imgs/eye.svg"
            fill
            alt="eye"
            objectFit='cover'
          />
        </div>
      </div>
      
      <div className='mt-4'>
        <h1 className='text-center font-manrope text-white font-extrabold text-[2.8rem] leading-[61.5px]'>Lorem ipsum</h1>
        <h2 className='font-normal text-[1rem] text-center font-manrope leading-[40px] text-light-white'>Created by: <span className='text-light-red'>Lorem ipsum</span></h2>
        <h2 className='font-normal text-[1rem] text-center font-manrope leading-[22px] text-light-white'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </h2>
      </div>

      <div className='flex items-center justify-center gap-6 mt-32'>
        {buttonList.map((list, index) => (
          <Box className={`${list.bgColor} h-[50px] w-[170px] px-2 flex gap-2 items-center justify-center hover:scale-110 ease-in-out duration-300 cursor-pointer`} key={index}>
            <div className=''>
              <Image
                src={list.icon}
                width={15}
                height={15}
                alt={list.name}
              />
            </div>
            <div>
              <small className='text-xs font-manrope text-white font-extrabold'>{list.name}</small>
            </div>
          </Box>
        ))}
      </div>
    </>
  )
}
