import Image from 'next/image'
import React from 'react'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'

const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight relative inline-block mb-14
          after:content-[''] after:absolute after:w-20 after:h-1 after:bottom-[-8px] after:left-0">
          Albums
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/KB.jpeg"
                alt="Khana Badosh" width={400} height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Albums <BsFillFileEarmarkMusicFill className='text-lg'/>
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="https://www.youtube.com/watch?v=JgFQcRcWRag&list=PLK_X-zjWMNPLrTrDsYAPCew83DUSqyG0C">Khana Badosh</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Khana Badosh by Jokhay: A journey of resilience and raw emotion, 
                where every beat tells a story of struggle and self-discovery.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/MTM.jpeg"
                alt="My Terrible Mind" width={400} height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Albums <BsFillFileEarmarkMusicFill className='text-lg'/>
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="https://www.youtube.com/watch?v=25cpx_ThZhg&list=PLmUgeKw7vSS7RUJ-b47zbYJvBch_vuG1k">My Terrible Mind</a>
                </h1>
                <p className="leading-relaxed mb-3">
                My Terrible Mind is a raw and emotional album that dives deep into struggles, reflections, and the chaos within.
                It captures unfiltered thoughts through powerful lyrics and intense soundscapes.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/RWAJ.jpeg"
                alt="Rockstar" width={400} height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Albums <BsFillFileEarmarkMusicFill className='text-lg'/>
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="https://www.youtube.com/watch?v=lqedDEch0ao&list=PLR5G0q8TmLdScysIGZIP4VW2susZNqjKb">Rockstar Without A Guitar</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Rockstar Without A Guitar by Umair: A bold and energetic album that redefines the 
                spirit of being a rockstar, blending passion with raw authenticity in every beat.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/SSA.jpeg"
                alt="Shikwa" width={400} height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Albums <BsFillFileEarmarkMusicFill className='text-lg'/>
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="https://www.youtube.com/watch?v=x0z0TIT2pRk&list=PLgk6L0Eeav1hh4kjx__FI6Il3uBqHGPn5">Shikwa Side A</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Shikwa Side A by Talha Yunus: A deep, introspective journey through unspoken emotions 
                and raw truths, captured through powerful lyrics and captivating beats.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/Lost.jpeg"
                alt="Lostalgia" width={400} height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Albums <BsFillFileEarmarkMusicFill className='text-lg'/>
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="https://www.youtube.com/watch?v=gPBB9gMMxmY&list=PLrkIeudR91CtFGyhV5N0gBVDNVAkej0Us">Lostalgia</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Lostalgia by Bol Jani: A soulful blend of nostalgia and emotion, where every track takes 
                you on a reflective journey through memories, struggles, and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>

  )
}

export default page
