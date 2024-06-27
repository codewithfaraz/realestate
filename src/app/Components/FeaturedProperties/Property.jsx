import Image from "next/image";
import BathroomIcon from "../../../../public/Images/Icons/bathroom-icon.png";
import BadroomIcon from "../../../../public/Images/Icons/bedroom-icon.png";
import VillaIcon from "../../../../public/Images/Icons/villa-icon.png";
export default function Property(props) {
  return (
    <div id="property" className="flex glide__slide">
      <div className="flex p-6  flex-col bg-black rounded-lg space-y-6">
        <Image src={props.img} alt="" width={600} />
        <div className="flex flex-col">
          <h1 className="text-white text-xl">{props.title}</h1>
          <p className="text-gray60">
            A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
            neighborhood...
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex text-white space-x-1 border-[1px] border-white rounded-full p-1 bg-dark">
            <Image src={BadroomIcon} alt="" width={20} height={20} />
            <p>{`${props.bedroom}-Bedroom`}</p>
          </div>
          <div className="flex text-white space-x-1 border-[1px] border-white rounded-full p-1 bg-dark">
            <Image src={BathroomIcon} alt="" width={20} height={20} />
            <p>{`${props.bathroom}-Bathroom`}</p>
          </div>
          {props.villa && (
            <div className="flex text-white space-x-1 border-[1px] border-white rounded-full p-1 bg-dark">
              <Image src={VillaIcon} alt="" width={20} height={20} />
              <p>Villa</p>
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <div className="">
            <p className="text-gray60">Price</p>
            <p className="text-white">$55,00</p>
          </div>
          <button className="bg-purple60 text-white py-4 px-6 rounded-lg">
            View Property Details
          </button>
        </div>
      </div>
    </div>
  );
}
