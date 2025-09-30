import Image from "next/image";
import React from "react";
import { PiMicrophoneStageBold } from "react-icons/pi";

const Page = () => {
  return (
    <section className="font-['Inter',sans-serif] text-gray-700 bg-gradient-to-b from-[#fdfdfd] to-[#f4f6f8] min-h-screen">
      {/* Section Heading */}
      <div className="container mx-auto px-6 pt-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight relative inline-block mb-14
          after:content-[''] after:absolute after:w-20 after:h-1 after:bottom-[-8px] after:left-0">
          Bands
        </h1>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-in-out overflow-hidden flex flex-col">
            <Image
              src="/YS.jpeg"
              alt="Young Stunners"
              width={400}
              height={700}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="flex gap-2 items-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Band <PiMicrophoneStageBold className="text-base" />
              </h2>
              <h1 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition">
                <a
                  href="https://www.youtube.com/channel/UCaHpJ-SkCR604NNBnjM9thQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Young Stunners
                </a>
              </h1>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Redefining Pakistan’s hip-hop scene with raw talent, authentic
                stories, and unforgettable beats.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-in-out overflow-hidden flex flex-col">
            <Image
              src="/AUR.jpeg"
              alt="AUR"
              width={400}
              height={700}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="flex gap-2 items-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Band <PiMicrophoneStageBold className="text-base" />
              </h2>
              <h1 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition">
                <a
                  href="https://www.youtube.com/@aurmusicband"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AUR
                </a>
              </h1>
              <p className="text-gray-600 leading-relaxed flex-grow">
                AUR combines sharp lyricism with innovative beats, pushing the
                boundaries of Pakistani rap with unfiltered expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
