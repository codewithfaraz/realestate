import Link from "next/link";
export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="flex bg-gray10 p-2 px-4 text-white md:justify-around items-center">
        <div className="logo  ">
          {/* logo */}
          <Link href="/" className="font-bold">
            Eastatien
          </Link>
        </div>
        {/* navbar */}
        <div className="md:flex hidden space-x-6 items-center">
          <a href="/" className="bg-black border-2 border-dark p-3 rounded-lg">
            Home
          </a>
          <a href="/">About Us</a>
          <a href="/">Services</a>
          <a href="/">Properties</a>
        </div>
        <button className="hidden md:block bg-black border-2 border-dark p-3 rounded-lg">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
