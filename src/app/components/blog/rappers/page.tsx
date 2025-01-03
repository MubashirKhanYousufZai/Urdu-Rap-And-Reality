import Image from 'next/image'
import React from 'react'
import { LuMicVocal } from 'react-icons/lu'

const page = () => {
  return (
    <section className="text-gray-600 body-font">
        <h1 className="text-3xl font-bold text-gray-900 ml-16 mt-4">Rappers</h1>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/TA1.jpeg"
                        alt="Talha Anjum"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/a5aOM1EpJmE?si=lt29X2uFDKOlWZrk">Talha Anjum</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Talha Anjum: A lyrical genius and poetic storyteller reshaping 
                        the landscape of Urdu hip-hop.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/TY.jpeg"
                        alt="Talha Younus"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                         Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/PoZ7b5sIrb8?si=u59nKElnU3ZLSa6h">Talha Younus</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Talhah Yunus: A visionary wordsmith and dynamic voice shaping 
                        the future of Urdu hip-hop.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/JJ.jpeg"
                        alt="JJ47"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/LRtMQxIQBKk?si=NhMLHvRJaUfcth8U">JJ47</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        JJ47: A versatile artist and producer, known for crafting powerful 
                        beats and delivering impactful Urdu rap that resonates with listeners.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/Faris.jpeg"
                        alt="Faris"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/r5Ak4KY8-cs?si=qF6svN9dwoDsTlKA">Faris Shafi</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Faris Shafi: A bold lyricist who delivers powerful, unfiltered verses 
                        that challenge the status quo.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/Demon.jpeg"
                        alt="Demon"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/lqX93bR4pWA?si=j-X83C8QQb29QLCa">Rap Demon</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Rap Demon: A dynamic force in Urdu rap, known for his intense flow 
                        and thought-provoking lyrics.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/Bohemia.jpeg"
                        alt="Bohemia"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/tixIb21MO5U?si=NMUWLDJlqdr-S9mU">Bohemia</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Bohemia: A pioneering force in Urdu rap, blending Punjabi and Urdu 
                        with a unique style that transcends borders.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/Aleem.jpeg"
                        alt="Aleem"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/YdKwr0l176M?si=eFE86q7QRbDMAF8a">Aleem RK</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Aleem RK: A rising star in Urdu rap, known for his soulful lyrics and 
                        smooth flow that captivate his audience.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/Jani.jpeg"
                        alt="Jani"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/B5KGeQv1dj4?si=UGvhLXsmmYT1-gjH">Bol Jani</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Bol Jani: A fearless Urdu rapper whose powerful lyrics and bold 
                        storytelling challenge the norms and spark change.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/Umer.jpeg"
                        alt="Umer"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/6Ex07UtaKHk?si=x_ZI7QdCGRW7ZtgO">Umer Anjum</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Umer Anjums seamless flow and razor-sharp drill skills bring unmatched 
                        energy and precision to every track, redefining the sound of Urdu rap.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/Savage.jpeg"
                        alt="Savage"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/rYN6yrPQpnw?si=SdST0RbJzhDyklCC">Savage</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Savage unleashes raw energy and unfiltered truth, carving his 
                        name in the rap scene with bold lyrics and an unstoppable flow.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="/Taimour.jpeg"
                        alt="Taimour"
                        width={400}
                        height={700}
                    />
                    <div className="p-6">
                        <h2 className="flex items-center gap-2 tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                        Urdu Rap <LuMicVocal className='text-lg'/>
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <a href="https://youtu.be/-yuY4oxyUPQ?si=h1pPUNq-zuiMLTIy">Taimour Baig</a>
                        </h1>
                        <p className="leading-relaxed mb-3">
                        Taimour Baig: A skillful wordsmith in Urdu rap, blending sharp 
                        lyricism with a unique style that makes his voice stand out.
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
