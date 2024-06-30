import Image from "next/image";
import Image1 from "../../../../public/Images/TeamImage1.png";
import Image2 from "../../../../public/Images/TeamImage2.png";
import Image3 from "../../../../public/Images/TeamImage3.png";
import TwiiterIcon from "../../../../public/Images/Icons/twitter-icon.png";
import SendIcon from "../../../../public/Images/Icons/send-icon.png";
export default function Team() {
  return (
    <section id="team">
      <div className="max-w-6xl mx-auto my-12 p-6">
        <h1 className="text-5xl text-white">Meet the Estatein Team</h1>
        <p className="text-gray60">
          At Estatein, our success is driven by the dedication and expertise of
          our team. Get to know the people behind our mission to make your real
          estate dreams a reality.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-2 mt-6">
          <div className="relative flex flex-col items-center space-y-10 border-[1px] border-gray60 py-6 px-3 rounded-lg">
            <Image src={Image1} height={200} />
            <a
              href=""
              className="absolute top-[140px] px-4 bg-purple60 rounded-2xl py-1"
            >
              <Image src={TwiiterIcon} width={30} />
            </a>
            <div className="text-center">
              <h1 className="text-white font-bold">Max Mitchell</h1>
              <p className="text-gray60">Founder</p>
            </div>
            <div className="flex bg-black border-[1px] items-center w-full rounded-full justify-between px-4 py-2">
              <p className="text-white">{`Say Hello \u{1F44B}`}</p>
              <a href="" className="  bg-purple60 rounded-2xl p-1">
                <Image src={SendIcon} width={30} />
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center space-y-10 border-[1px] border-gray60 py-6 px-3 rounded-lg">
            <Image src={Image2} height={200} />
            <a
              href=""
              className="absolute top-[140px] px-4 bg-purple60 rounded-2xl py-1"
            >
              <Image src={TwiiterIcon} width={30} />
            </a>
            <div className="text-center">
              <h1 className="text-white font-bold">Sarah Johnson</h1>
              <p className="text-gray60">Chief Real Estate Officer</p>
            </div>
            <div className="flex bg-black border-[1px] items-center w-full rounded-full justify-between px-4 py-2">
              <p className="text-white">{`Say Hello \u{1F44B}`}</p>
              <a href="" className="  bg-purple60 rounded-2xl p-1">
                <Image src={SendIcon} width={30} />
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center space-y-10 border-[1px] border-gray60 py-6 px-3 rounded-lg">
            <Image src={Image3} height={200} />
            <a
              href=""
              className="absolute top-[140px] px-4 bg-purple60 rounded-2xl py-1"
            >
              <Image src={TwiiterIcon} width={30} />
            </a>
            <div className="text-center">
              <h1 className="text-white font-bold">David Brown</h1>
              <p className="text-gray60">Head of Property Management</p>
            </div>
            <div className="flex bg-black border-[1px] items-center w-full rounded-full justify-between px-4 py-2">
              <p className="text-white">{`Say Hello \u{1F44B}`}</p>
              <a href="" className="  bg-purple60 rounded-2xl p-1">
                <Image src={SendIcon} width={30} />
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center space-y-10 border-[1px] border-gray60 py-6 px-3 rounded-lg">
            <Image src={Image1} height={200} />
            <a
              href=""
              className="absolute top-[140px] px-4 bg-purple60 rounded-2xl py-1"
            >
              <Image src={TwiiterIcon} width={30} />
            </a>
            <div className="text-center">
              <h1 className="text-white font-bold">Max Mitchell</h1>
              <p className="text-gray60">Founder</p>
            </div>
            <div className="flex bg-black border-[1px] items-center w-full rounded-full justify-between px-4 py-2">
              <p className="text-white">{`Say Hello \u{1F44B}`}</p>
              <a href="" className="  bg-purple60 rounded-2xl p-1">
                <Image src={SendIcon} width={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
