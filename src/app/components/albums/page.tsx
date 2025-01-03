import Image from 'next/image'
import React from 'react'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'

const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
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
                <a href="https://open.spotify.com/album/3lQNJaqT3y0u9zFD3oDsES?si=AtOUF05gQwqQ8RKQymMrjg">Khana Badosh</a>
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
                src="/OP.jpeg"
                alt="Open Letter" width={400} height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Albums <BsFillFileEarmarkMusicFill className='text-lg'/>
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="https://open.spotify.com/album/66sgvYGlzFD9QyMzHYFqRh?si=b33a008c80e74d2c">Open Letter</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Open Letter by Talha Anjum: A heartfelt collection of lyrical introspection, 
                where each track serves as a powerful message of self-reflection and growth.
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
                <a href="https://open.spotify.com/album/1DayIaoubhlZ9kiX2mB9So?si=880254ffbbe444d8">Rockstar Without A Guitar</a>
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
                src="/SSB.jpeg"
                alt="Shikwa" width={400} height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Albums <BsFillFileEarmarkMusicFill className='text-lg'/>
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="https://open.spotify.com/album/18grR25zEvxF4ToDL2zLde?si=8790659f3057494c">Shikwa Side B</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Shikwa Side B by Talha Yunus: A deep, introspective journey through unspoken emotions 
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
                <a href="https://open.spotify.com/album/2mDw4o6f2TRjQQhxSVkeHY?si=d26fffa71cf84d54">Lostalgia</a>
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
