import Image from "next/image";
import { GiMusicalNotes } from "react-icons/gi";

export default function Home() {
  return (
    <section className="relative text-gray-600 body-font">
      {/* Background gradient (lighter) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-red-200 opacity-95"></div>

      <div className="container relative mx-auto flex px-5 py-24 items-center justify-center flex-col text-gray-900">
        {/* Logo */}
        <Image
          className="mb-10 object-cover object-center rounded-xl shadow-lg bg-white/70 p-3"
          alt="hero"
          width={350}
          height={350}
          src="/logo.png"
        />

        {/* Title + Icon */}
        <div className="text-center lg:w-2/3 w-full">
          <div className="flex justify-center gap-2 items-center text-gray-900">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold tracking-wide hover:text-red-500 transition-colors duration-300">
              <a
                href="https://youtu.be/Ai47BcMrsXw?si=TMBSAPcXXycTQZ4W"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urdu Rap and Reality
              </a>
            </h1>
            <GiMusicalNotes className="text-4xl text-red-600 animate-bounce" />
          </div>

          {/* Paragraph */}
          <p className="mb-8 leading-relaxed text-lg text-justify">
            The Urdu rap scene in Pakistan has seen explosive growth, evolving
            into a powerful medium of expression for the youth. Combining poetic
            lyricism with hard-hitting beats, Urdu rap addresses themes of
            social issues, personal struggles, and cultural pride. Artists like
            Young Stunners, Bohemia, and Faris Shafi have brought authenticity
            and storytelling to the forefront, resonating deeply with listeners.
            The genres fusion of traditional Urdu poetry with contemporary
            hip-hop elements has carved a unique identity, making it a rising
            force in South Asias music landscape.
          </p>

          {/* Call to Action */}
          <div className="flex justify-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white bg-red-600 border-0 py-3 px-6 focus:outline-none hover:bg-red-700 rounded-full text-lg shadow-md transition-all duration-300"
            >
              🎧 Explore Urdu Rap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
