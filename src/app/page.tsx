import Image from "next/image";
import { GiMusicalNotes } from "react-icons/gi";

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          width={600}
          height={700}
          src="/Urdu.jpeg"
        />
        <div className="text-center lg:w-2/3 w-full">
        <div className="flex text-center justify-center gap-2 text-gray-900">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            <a href="https://youtu.be/Ai47BcMrsXw?si=TMBSAPcXXycTQZ4W">Urdu Rap and Reality</a>
        </h1>
        <GiMusicalNotes className='text-3xl font-bold'/>
        </div>
          <p className="mb-8 leading-relaxed">
            The Urdu rap scene in Pakistan has seen explosive growth, evolving
            into a powerful medium of expression for the youth. Combining poetic
            lyricism with hard-hitting beats, Urdu rap addresses themes of
            social issues, personal struggles, and cultural pride. Artists like
            Young Stunners, Bohemia, and Faris Shafi have brought
            authenticity and storytelling to the forefront, resonating deeply
            with listeners. The genres fusion of traditional Urdu poetry with
            contemporary hip-hop elements has carved a unique identity, making
            it a rising force in South Asias music landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
