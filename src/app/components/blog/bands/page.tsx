import Image from "next/image";
import React from "react";
import { PiMicrophoneStageBold } from "react-icons/pi";

const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-3xl font-bold text-gray-900 ml-16 mt-8">Bands</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/YS.jpeg"
                alt="YS"
                width={400}
                height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Bands <PiMicrophoneStageBold className="text-lg" />
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  <a href="https://youtu.be/JiF9anzVqM4?si=lfbrrA9o1J12TGD0">Young Stunners</a>
                </h1>
                <p className="leading-relaxed mb-3">
                  Young Stunners: Redefining Pakistans hip-hop scene with raw
                  talent, authentic stories, and unforgettable beats.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/AUR.jpeg"
                alt="AUR"
                width={400}
                height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Bands <PiMicrophoneStageBold className="text-lg" />
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  <a href="https://youtu.be/AX6OrbgS8lI?si=mNUE1X87uZKk7FEh">AUR</a>
                </h1>
                <p className="leading-relaxed mb-3">
                  AUR: A force of unfiltered expression, AUR combines sharp
                  lyricism with innovative beats, redefining the sound of
                  Pakistani rap.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/LUG.jpeg"
                alt="LUG"
                width={400}
                height={700}
              />
              <div className="p-6">
                <h2 className="flex gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Bands <PiMicrophoneStageBold className="text-lg" />
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  <a href="https://youtu.be/Wy0RlCY9iZo?si=4ofYTNiQBC-nyJ-x">LUG</a>
                </h1>
                <p className="leading-relaxed mb-3">
                Lyari Underground (LUG) amplifies the voice of the streets, 
                blending raw energy with Balochi pride to create powerful, unfiltered rap anthems.
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
