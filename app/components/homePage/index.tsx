'use client'

import { useState } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";
import Features from "./Features";
import Social from "./Social";

export default function HomePage() {
  const [isSocialOpen, setIsSocialOpen] = useState<boolean>(true);

  return (
    <main className="">
      <div className="">
        <header>
          <Navbar />
          <div className="h-1.5 w-full bg-header-gradient animate-[pulse_4s_ease-in-out_infinite]"></div>
        </header>
        <div className="bg-banner-gradient bg-banner pb-8">
          <section className="relative w-full h-[88vh]">
            <Banner />
          </section>
          <section className="flex flex-row flex-wrap justify-center mt-10 gap-8">
            <div className="w-[45%] h-[25rem]">
              <Social isOpen={isSocialOpen} setIsOpen={setIsSocialOpen} />    
            </div>
            <Features />
          </section>
        </div>

        <Footer />
      </div>
    </main>
  )
}
