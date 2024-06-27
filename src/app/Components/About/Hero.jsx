import HeroImage from "../../../../public/Images/about-page-hero-image.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section id="hero" className=" ">
      <div className="  text-white flex flex-col-reverse md:flex-row container mx-auto md:px-0 px-6 items-center">
        <div className="flex  flex-col mt-6 md:mt-0 md:px-6">
          <h1 className="md:text-5xl leading-tight text-3xl max-w-sm md:max-w-lg">
            Our Journey
          </h1>
          <p className="text-gray60 max-w-lg">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>

          <div className="flex flex-wrap mt-5">
            <div className="bg-black border-2 border-dark rounded-lg px-8 py-5 flex-1">
              <h1 className="text-white text-4xl font-semibold">200+</h1>
              <p className="text-gray60">Happy Customers</p>
            </div>
            <div className="bg-black border-2 border-dark rounded-lg px-8 py-5 flex-1">
              <h1 className="text-white text-4xl font-semibold">10K+</h1>
              <p className="text-gray60">Properties for client</p>
            </div>
            <div className="bg-black border-2 border-dark rounded-lg px-8 py-5 flex-1  text-center md:text-left">
              <h1 className="text-white text-4xl font-semibold">16+</h1>
              <p className="text-gray60">Years of experience</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={HeroImage}
            alt=""
            width={730}
            className=" border-2 border-dark bg-black md:bg-none rounded-lg md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
