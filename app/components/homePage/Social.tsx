'use client'

import { Collapse } from 'react-collapse';

import { socialLinks } from '@/app/lib/constants'
import Image from 'next/image'
import Box from '../shared/Box'

interface PropsI {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Social({isOpen, setIsOpen}: PropsI) {

  return (
    <>
      <Box className={`w-full h-full`}>
        <div className={`flex p-10 items-center justify-between bg-transparent-black`}>
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
          </div>
          <div 
            onClick={() => setIsOpen(prevState => !prevState)} 
            className={`cursor-pointer transition ease-in-out delay-150 duration-300 ${!isOpen ? 'rotate-180' : 'rotate-360'}`}
          >
            <Image
              src={'/icons/down-arrow.svg'}
              width={15}
              height={17}
              alt={'down icon'}
            />
          </div>
        </div>
        <div className='bg-transparent-black'>
          <Collapse isOpened={isOpen}>
            <div className='w-[70%] p-10 pt-6'>
              <p className='text-sm font-manrope text-white font-normal w-full'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>

              <div className='flex flex-wrap justify-center mt-20 gap-8'>
                {socialLinks.map((link, index) => (
                  <div key={index} className={`w-[45%]`}>
                    <div className={`flex items-center gap-2`}>
                      <div>
                        <Image
                          src={link.icon}
                          width={22}
                          height={22}
                          alt={link.name}
                        />
                      </div>
                      <div>
                        <small className={`text-sm font-manrope ${link.color} font-normal`}>{link.name}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Collapse>
        </div>

      </Box>      
    </>
  )
}
