import Image from "next/image";
import DomainIcon from "../../../../public/Images/Icons/domain-icon.png";
import CategoryIcon from "../../../../public/Images/Icons/category-icon.png";
export default function ValuedClien(props) {
  return (
    <section id="review">
      <div className="flex-flex-col w-1/ bg-black p-5 space-y-9">
        <div className="flex items-center justify-between">
          <div className="">
            <p className="text-gray60">{`Since ${props.since}`}</p>
            <h1 className="text-white">{props.title}</h1>
          </div>
          <button className=" text-white bg-gray10 py-4 px-3 rounded-lg">
            View Website
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/2 border-l-2 pl-3">
            <div className="flex">
              <Image src={DomainIcon} />
              <p className="text-gray60">Domain</p>
            </div>
            <h1 className="text-white">{props.domain}</h1>
          </div>
          <div className="w-1/2 border-l-2 pl-3">
            <div className="flex">
              <Image src={CategoryIcon} />
              <p className="text-gray60">{props.category}</p>
            </div>
            <h1 className="text-white">Luxury Home Development</h1>
          </div>
        </div>
        <div className=" border-[1px] p-3 rounded-lg">
          <p className="text-gray60">What the Sad?</p>
          <p className="text-white">{props.message}</p>
        </div>
      </div>
    </section>
  );
}
