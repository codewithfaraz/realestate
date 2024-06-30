import StarIcon from "../../../../public/Images/Icons/star-icon.png";
import ExcellenceIcon from "../../../../public/Images/Icons/excellence-icon.png";
import ClientIcon from "../../../../public/Images/Icons/client-icon.png";
import Image from "next/image";
export default function Values() {
  return (
    <section id="values">
      <div className="p-3  md:p-0 rounded-xl items-center max-w-6xl mx-auto my-12 flex flex-col md:flex-row  space-y-5 md:space-y-0 justify-between md:space-x-4">
        <div className="">
          <h1 className="text-white text-4xl">Our Values</h1>
          <p className="text-gray60 md:max-w-3xl">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className="md:grid grid-cols-2 grid-rows-2 shadow-md shadow-gray60 p-6">
          <div className="flex flex-col p-2 md:border-b-2 md:border-b-gray-500">
            <div className="flex items-center space-x-2">
              <Image src={StarIcon} width={32} height={32} />
              <h2 className="text-white">Trust</h2>
            </div>
            <p className="text-gray60">
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <div className="flex flex-col p-2 md:border-b-2 md:border-b-gray-500 md:border-l-2 md:border-l-gray-500">
            <div className="flex items-center space-x-2">
              <Image src={ExcellenceIcon} width={32} height={32} />
              <h2 className="text-white">Excellence</h2>
            </div>
            <p className="text-gray60">
              We set the bar high for ourselves. From the properties we list to
              the services we provide.
            </p>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex items-center space-x-2">
              <Image src={ClientIcon} width={32} height={32} />
              <h2 className="text-white">Client-Centric</h2>
            </div>
            <p className="text-gray60">
              Your dreams and needs are at the center of our universe. We
              listen, understand.
            </p>
          </div>
          <div className="flex flex-col p-2 md:border-l-2 md:border-l-gray-500">
            <div className="flex items-center space-x-2">
              <Image src={StarIcon} width={32} height={32} />
              <h2 className="text-white">Our Commitment</h2>
            </div>
            <p className="text-gray60">
              We are dedicated to providing you with the highest level of
              service, professionalism, and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
