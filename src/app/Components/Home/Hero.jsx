import HeroImage from "../../../../public/Images/HeroImage.png";
import DreamHomeIcon from "../../../../public/Images/dream-home-icon.png";
import EfortlessIcon from "../../../../public/Images/effortless-property-icon.png";
import SmartInvestmentIcon from "../../../../public/Images/smart-investment-icon.png";
import UnlockPropertyIcon from "../../../../public/Images/unlock-property-icon.png";
import RotatedArrow from "../../../../public/Images/rotated-arrow-icon.png";
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
      <div className="flex flex-wrap bg-black container mx-auto md:gap-2 md:py-2 py-1  gap-1 justify-center border-2 border-gray-500 rounded-md">
        <div className="space-y-2 relative flex flex-col md:w-1/5 bg-dark items-center py-7 rounded-md px-2 w-1/3">
          <Image src={DreamHomeIcon} alt="" width={24} />
          <p className="text-white text-sm max-w-xs text-center">
            Find Your Dream Home
          </p>
        </div>
        <div className="space-y-2 relative flex flex-col md:w-1/5 bg-dark items-center py-7 px-2 rounded-md w-1/3">
          <Image src={UnlockPropertyIcon} alt="" width={24} />
          <p className="text-white text-sm max-w-xs text-center">
            Unlock Property Value
          </p>
        </div>
        <div className="space-y-2 relative flex flex-col md:w-1/5 bg-dark items-center py-7 px-2 rounded-md w-1/3">
          <Image src={EfortlessIcon} alt="" width={24} />
          <p className="text-white text-sm max-w-xs text-center">
            Effortless Property Management
          </p>
        </div>
        <div className="space-y-2 relative flex flex-col md:w-1/5 bg-dark items-center py-7 px-2 rounded-md w-1/3">
          <Image src={SmartInvestmentIcon} alt="" width={24} />
          <p className="text-white text-sm max-w-xs text-center">
            Smart Investment, informed decisions
          </p>
        </div>
      </div>
    </section>
  );
}
