import Image from 'next/image'
import React from 'react'
import { LuMicVocal } from 'react-icons/lu'

const Page = () => {
  return (
    <section className="bg-gray-100 text-gray-700 body-font min-h-screen">
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 ml-16 mt-10 mb-6">
        Rappers
      </h1>

      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Component */}
          {[
            {
              src: "/TA1.jpeg",
              alt: "Talha Anjum",
              link: "https://youtu.be/a5aOM1EpJmE?si=lt29X2uFDKOlWZrk",
              name: "Talha Anjum",
              desc: "A lyrical genius and poetic storyteller reshaping the landscape of Urdu hip-hop."
            },
            {
              src: "/TY.jpeg",
              alt: "Talha Younus",
              link: "https://youtu.be/PoZ7b5sIrb8?si=u59nKElnU3ZLSa6h",
              name: "Talha Younus",
              desc: "A visionary wordsmith and dynamic voice shaping the future of Urdu hip-hop."
            },
            {
              src: "/JJ.jpeg",
              alt: "JJ47",
              link: "https://youtu.be/LRtMQxIQBKk?si=NhMLHvRJaUfcth8U",
              name: "JJ47",
              desc: "A versatile artist and producer, delivering impactful Urdu rap that resonates."
            },
            {
              src: "/Faris.jpeg",
              alt: "Faris Shafi",
              link: "https://youtu.be/r5Ak4KY8-cs?si=qF6svN9dwoDsTlKA",
              name: "Faris Shafi",
              desc: "A bold lyricist who delivers powerful, unfiltered verses that challenge the status quo."
            },
            {
              src: "/Demon.jpeg",
              alt: "Rap Demon",
              link: "https://youtu.be/lqX93bR4pWA?si=j-X83C8QQb29QLCa",
              name: "Rap Demon",
              desc: "A dynamic force in Urdu rap, known for his intense flow and thought-provoking lyrics."
            },
            {
              src: "/Bohemia.jpeg",
              alt: "Bohemia",
              link: "https://youtu.be/tixIb21MO5U?si=NMUWLDJlqdr-S9mU",
              name: "Bohemia",
              desc: "A pioneering force in Urdu rap, blending Punjabi and Urdu with a unique style."
            },
            {
              src: "/Aleem.jpeg",
              alt: "Aleem RK",
              link: "https://youtu.be/YdKwr0l176M?si=eFE86q7QRbDMAF8a",
              name: "Aleem RK",
              desc: "A rising star, known for his soulful lyrics and smooth flow that captivate his audience."
            },
            {
              src: "/Jani.jpeg",
              alt: "Bol Jani",
              link: "https://youtu.be/B5KGeQv1dj4?si=UGvhLXsmmYT1-gjH",
              name: "Bol Jani",
              desc: "A fearless Urdu rapper whose storytelling challenges norms and sparks change."
            },
            {
              src: "/Umer.jpeg",
              alt: "Umer Anjum",
              link: "https://youtu.be/6Ex07UtaKHk?si=x_ZI7QdCGRW7ZtgO",
              name: "Umer Anjum",
              desc: "His seamless flow and sharp drill skills redefine the sound of Urdu rap."
            },
            {
              src: "/Savage.jpeg",
              alt: "Savage",
              link: "https://youtu.be/rYN6yrPQpnw?si=SdST0RbJzhDyklCC",
              name: "Savage",
              desc: "Unleashes raw energy and bold lyrics, carving his name with an unstoppable flow."
            },
            {
              src: "/Taimour.jpeg",
              alt: "Taimour Baig",
              link: "https://youtu.be/-yuY4oxyUPQ?si=h1pPUNq-zuiMLTIy",
              name: "Taimour Baig",
              desc: "A skillful wordsmith blending sharp lyricism with a unique standout style."
            },
          ].map((rapper, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200"
            >
              {/* Image */}
              <Image
                className="h-56 w-full object-cover"
                src={rapper.src}
                alt={rapper.alt}
                width={400}
                height={700}
              />
              {/* Content */}
              <div className="p-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-2">
                  Urdu Rap <LuMicVocal className="text-lg text-red-500" />
                </h2>
                <h1 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition">
                  <a href={rapper.link} target="_blank" rel="noopener noreferrer">
                    {rapper.name}
                  </a>
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {rapper.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page
