import Image from "next/image";
import React from "react";
import { RiMic2AiLine } from "react-icons/ri";

const page = () => {
  return (
    <section className="text-gray-600 body-font">
        <h1 className="text-3xl font-bold text-gray-900 ml-16 mt-4">Producers</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/Jokhay.jpeg"
                alt="Jokhay"
                width={400}
                height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Producer <RiMic2AiLine className="text-lg" />
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="mailto:umairkhanmusic@gmail.com">Jokhay</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Jokhay: A unique voice in Pakistans rap scene, blending thought-provoking lyrics 
                with powerful storytelling that resonates with raw emotion and authenticity.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/RWAJ.jpeg"
                alt="Umair"
                width={400}
                height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Producer <RiMic2AiLine className="text-lg" />
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="mailto:sirenmusicmngmt@gmail.com">Umair</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Umair: A trailblazer in the rap world, blending bold energy and heartfelt 
                lyrics to create a sound that speaks to the soul and challenges the norm.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/Aur.jpeg"
                alt="Rafay"
                width={400}
                height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Producer <RiMic2AiLine className="text-lg" />
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <a href="mailto:raffeyanwar786@gmail.com">Rafay Anwar</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Rafay Anwar weaves magic through his beats, blending innovation 
                with soul to create soundscapes that resonate deeply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
