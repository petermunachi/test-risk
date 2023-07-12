import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='py-5 px-14'>
      <div className='flex items-center flex-row'>
        <div className="basis-1/2">
          <Image
            src="/logo/nav-logo.svg"
            alt="Fr0ntierX Logo"
            width={198}
            height={23}
            priority
          />
        </div>
        <div className="basis-1/1">
          <div className='w-[657px] flex h-11 items-center bg-input-color shadow-input-shadow rounded-lg'>
            <div className='w-[5%] pl-4'>
              <Image
                src="/icons/search-line.svg"
                alt="Search Icon"
                width={21}
                height={21}
              />
            </div>
            <div className='w-[95%]'>
              <input type='text' className='bg-input-color pl-2 font-manrope text-input-text-color font-semibold text-sm w-full h-full leading-4 block outline-none' />
            </div>
          </div>
        </div>
        <div className="basis-1/5">
          <ul className='cursor-pointer list-none flex justify-end'>
            <li className='px-5 hover:scale-110 ease-in-out duration-300'>
              <Link href="/#" className='font-manrope text-white font-extrabold text-sm'>Lorem</Link>
            </li>
            <li className='px-5 hover:scale-110 ease-in-out duration-300'>
              <Link href="/#" className='font-manrope text-white font-extrabold text-sm'>Lorem</Link>
            </li>
            <li className='pl-5 hover:scale-110 ease-in-out duration-300'>
              <Link href="/#" className='font-manrope text-white font-extrabold text-sm'>Lorem</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
