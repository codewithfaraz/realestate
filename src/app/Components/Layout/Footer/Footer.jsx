import Image from "next/image";
import FacebookIcon from "../../../../../public/Images/Icons/facebook-icon.png";
import YoutubeIcon from "../../../../../public/Images/Icons/youtube-icon.png";
import LinkedinIcon from "../../../../../public/Images/Icons/linkedin-icon.png";
import TwitterIcon from "../../../../../public/Images/Icons/twitter-icon.png";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="my-24 border-t-[1px] border-gray60 py-12 space-y-4 md:space-y-0 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-baseline px-6 md:px-0">
        <div className="lflex flex-col space-y-2">
          <h1 className="text-white font-bold text-2xl">Eastien</h1>
          <input
            type="email"
            placeholder="Enter your Email"
            className="bg-black placeholder:text-dark placeholder:text-xl p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-wrap md:flex-row justify-between md:space-x-12">
          <div className="flex flex-col space-y-2">
            <h1 className="text-gray60">Home</h1>
            <a href="" className="text-white">
              Hero Section
            </a>
            <a href="" className="text-white">
              Features
            </a>
            <a href="" className="text-white">
              Properties
            </a>
            <a href="" className="text-white">
              Testimonials
            </a>
            <a href="" className="text-white">
              FAQ's
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-gray60">Home</h1>
            <a href="" className="text-white">
              About Us
            </a>
            <a href="" className="text-white">
              Our Story
            </a>
            <a href="" className="text-white">
              Our Works
            </a>
            <a href="" className="text-white">
              How it works?
            </a>
            <a href="" className="text-white">
              Our Team
            </a>
            <a href="" className="text-white">
              Our Clients
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-gray60">Properties</h1>
            <a href="" className="text-white">
              Portfolio
            </a>
            <a href="" className="text-white">
              Categories
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-gray60">Services</h1>
            <a href="" className="text-white">
              Valuation Mastery
            </a>
            <a href="" className="text-white">
              Strategic Marketing
            </a>
            <a href="" className="text-white">
              Negotiation Wazdary
            </a>
            <a href="" className="text-white">
              Closing Success
            </a>
            <a href="" className="text-white">
              Property Management
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-gray60">Contact Us</h1>
            <a href="" className="text-white">
              Contact Form
            </a>
            <a href="" className="text-white">
              Our Offices
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-12 bg-black py-6 justify-between items-center space-y-6 md:space-y-0">
        <div className="flex text-white space-x-3">
          <p>&copy;2024 Eastatien. All RIghts Reserved.</p>
          <a href="">Terms & Conditions</a>
        </div>
        <div className="socials flex space-x-3">
          <Image src={FacebookIcon} alt="" className="bg-dark rounded-full" />
          <Image src={TwitterIcon} alt="" className="bg-dark rounded-full" />
          <Image src={YoutubeIcon} alt="" className="bg-dark rounded-full" />
          <Image src={LinkedinIcon} alt="" className="bg-dark rounded-full" />
        </div>
      </div>
    </footer>
  );
}
