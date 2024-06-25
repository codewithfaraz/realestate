import Image from "next/image";
import StarImage from "../../../../public/Images/review-star-icon.png";
export default function Review(props) {
  return (
    <section id="review">
      <div className="flex-flex-col w-1/ bg-black p-5 space-y-3">
        <div className="flex space-x-2">
          <Image src={StarImage} width={12} height={12} alt="" />
          <Image src={StarImage} width={12} height={12} alt="" />
          <Image src={StarImage} width={12} height={12} alt="" />
          <Image src={StarImage} width={12} height={12} alt="" />
          <Image src={StarImage} width={12} height={12} alt="" />
        </div>
        <h1 className="text-white text-xl">{props.title}</h1>
        <p className=" text-sm text-gray60">{props.description}</p>
        <div className="flex items-center space-x-3">
          <Image src={props.img} alt="" />
          <div>
            <h1 className="text-white">{props.reviewerName}</h1>
            <p className="text-gray60">{props.reviewerLocation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
