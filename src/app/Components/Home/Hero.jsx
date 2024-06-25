import HeroImage from "../../../../public/Images/HeroImage.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section id="hero" className=" ">
      <div className="  text-white flex flex-col-reverse md:flex-row container mx-auto md:px-0 px-6 items-center">
        <div className="flex  flex-col mt-6 md:mt-0 md:px-6">
          <h1 className="md:text-5xl leading-tight text-3xl max-w-sm md:max-w-lg">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="text-gray60">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-5">
            <button className="bg-black text-white rounded-lg p-4 border-[1px] border-gray-50">
              Learn More
            </button>
            <button className="bg-purple60 text-white py-4 px-6 rounded-lg">
              Browse Properties
            </button>
          </div>
          <div className="flex flex-wrap mt-5">
            <div className="bg-black border-2 border-dark rounded-lg px-8 py-5 flex-1">
              <h1 className="text-white text-4xl font-semibold">200+</h1>
              <p className="text-gray60">Happy Customers</p>
            </div>
            <div className="bg-black border-2 border-dark rounded-lg px-8 py-5 flex-1">
              <h1 className="text-white text-4xl font-semibold">200+</h1>
              <p className="text-gray60">Happy Customers</p>
            </div>
            <div className="bg-black border-2 border-dark rounded-lg px-8 py-5 flex-1  text-center md:text-left">
              <h1 className="text-white text-4xl font-semibold">200+</h1>
              <p className="text-gray60">Happy Customers</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={HeroImage}
            alt=""
            width={700}
            className=" border-2 border-dark bg-black md:bg-none rounded-lg md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
