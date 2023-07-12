'use client'

import { featureList } from '@/app/lib/constants'
import Image from 'next/image'
import Box from '../shared/Box'
import Social from './Social'
import { useState } from 'react'
import { Collapse } from 'react-collapse'

export default function Features() {
  const [isSocialOpen, setIsSocialOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);


  return (
    <div className='w-[45%]'>
      <Box className=''>
        <div className='flex p-10 pb-4 items-center justify-between bg-transparent-black'>
          <div className={`flex items-center gap-2`}>
            <div>
              <Image
                src={'/icons/apps.svg'}
                width={17}
                height={17}
                alt={'apps icon'}
              />
            </div>
            <div>
              <small className='text-sm font-manrope text-white font-extrabold'>Lorem ipsum</small>
            </div>
            <div>
              <Image
                src={'/icons/question.svg'}
                width={15}
                height={15}
                alt={'question icon'}
              />
            </div>
          </div>
          <div 
            onClick={() => setIsOpen(prevState => !prevState)} 
            className={`cursor-pointer transition ease-in-out delay-150 duration-300 ${!isOpen ? 'rotate-180' : 'rotate-360'}`}
          >
            <Image
              src={'/icons/down-arrow.svg'}
              width={15}
              height={17}
              alt={'apps icon'}
            />
          </div>
        </div>
        <div className='bg-transparent-black pb-6 pr-10'>
          <Collapse isOpened={isOpen}>
            <div className='flex overflow-y-scroll h-[23rem] bg-banner-scroll flex-wrap gap-8 p-10 pr-0 pt-6'>
              {featureList.map((list, index) => (
                <Box key={index} className='bg-light-black p-6 w-48'>
                  <h3 className='text-center font-manrope text-light-gray text-xs font-normal'>{list.description}</h3>
                  <h3 className='text-center font-manrope text-white text-sm font-extrabold leading-8'>{list.title}</h3>
                  <h3 className='text-center font-manrope text-light-gray text-xs font-normal'>{list.percent}</h3>
                </Box>
              ))}
            </div>
          </Collapse>
        </div>
      </Box>  

      <div className='mt-10'>
        <Social isOpen={isSocialOpen} setIsOpen={setIsSocialOpen} />    
      </div>
    </div>
  )
}
