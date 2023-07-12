import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex justify-center pt-24 pb-16">
      <div className="">
        <Image
          src="/logo/footer-logo.svg"
          alt="Fr0ntierX Logo"
          width={195}
          height={23}
          priority
        />
      </div>
    </footer>
  )
}
