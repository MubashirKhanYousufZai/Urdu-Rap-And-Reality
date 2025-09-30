import Image from "next/image";
import React from "react";
import { RiMic2AiLine } from "react-icons/ri";

const Page = () => {
  return (
    <section className="font-['Inter',sans-serif] text-gray-700 body-font bg-gradient-to-b from-[#fdfdfd] to-[#f4f6f8] min-h-screen">
      {/* Section Heading */}
      <div className="container mx-auto px-6 pt-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight relative inline-block mb-14 after:content-[''] after:absolute after:w-16 after:h-1 after:bottom-[-8px] after:left-0">
          Producers
        </h1>

        {/* Card Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 ease-in-out flex flex-col">
            <Image
              src="/Jokhay.jpeg"
              alt="Jokhay"
              width={400}
              height={300}
              className="w-full h-60 object-cover rounded-t-3xl"
            />
            <div className="p-7 flex flex-col flex-grow">
              <h2 className="flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                Producer <RiMic2AiLine className="text-base text-gray-700" />
              </h2>
              <h1 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">
                <a href="mailto:umairkhanmusic@gmail.com">Jokhay</a>
              </h1>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Jokhay: A unique voice in Pakistan’s rap scene, blending
                thought-provoking lyrics with powerful storytelling that
                resonates with raw emotion and authenticity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 ease-in-out flex flex-col">
            <Image
              src="/RWAJ.jpeg"
              alt="Umair"
              width={400}
              height={300}
              className="w-full h-60 object-cover rounded-t-3xl"
            />
            <div className="p-7 flex flex-col flex-grow">
              <h2 className="flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                Producer <RiMic2AiLine className="text-base text-gray-700" />
              </h2>
              <h1 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">
                <a href="mailto:sirenmusicmngmt@gmail.com">Umair</a>
              </h1>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Umair: A trailblazer in the rap world, blending bold energy and
                heartfelt lyrics to create a sound that speaks to the soul and
                challenges the norm.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 ease-in-out flex flex-col">
            <Image
              src="/rafay.png"
              alt="Rafay"
              width={400}
              height={300}
              className="w-full h-60 object-cover rounded-t-3xl"
            />
            <div className="p-7 flex flex-col flex-grow">
              <h2 className="flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                Producer <RiMic2AiLine className="text-base text-gray-700" />
              </h2>
              <h1 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">
                <a href="mailto:raffeyanwar786@gmail.com">Rafay Anwar</a>
              </h1>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Rafay Anwar weaves magic through his beats, blending innovation
                with soul to create soundscapes that resonate deeply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
