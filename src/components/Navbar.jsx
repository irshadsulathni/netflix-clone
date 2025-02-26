import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import search from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { Menu, X, User, Settings, HelpCircle, Users } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full text-white px-6 py-3 flex items-center justify-between z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-6 ml-10 mt-5">
        <img src={logo} alt="Netflix Logo" className="w-24 cursor-pointer" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"].map(
            (item) => (
              <li key={item} className="cursor-pointer hover:text-gray-400 transition">
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 mr-8 mt-3">
        <img src={search} alt="Search" className="w-5 hidden md:block cursor-pointer" />
        <p className="hidden md:block text-sm cursor-pointer hover:text-gray-400">Children</p>
        <img src={bell_icon} alt="Notifications" className="w-5 cursor-pointer" />

        {/* Profile Section (Hover for Dropdown) */}
        <div 
          className="relative flex items-center gap-2 cursor-pointer"
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          <img src={profile_img} alt="Profile" className="w-8 h-8 rounded-md" />
          <img src={caret_icon} alt="Dropdown" className="w-4" />

          {/* Profile Dropdown */}
          <div
            className={`absolute right-0 top-10 bg-black border border-gray-700 p-3 rounded-md text-sm w-48 transition-all duration-300 shadow-lg shadow-black/50 backdrop-blur-md ${
              isProfileOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
            }`}
          >
            <p className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-800 transition">
              <Users size={16} /> Children
            </p>
            <p className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-800 transition">
              <User size={16} /> Manage Profiles
            </p>
            <p className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-800 transition">
              <Settings size={16} /> Account
            </p>
            <p className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-800 transition">
              <HelpCircle size={16} /> Help Center
            </p>
            
            {/* Separator Line */}
            <hr className="border-gray-700 my-2" />

            <p className="px-3 py-2 cursor-pointer hover:bg-gray-800 transition">
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black/80 text-white p-5 flex flex-col gap-4 md:hidden border-t border-gray-700 transition-transform duration-300 backdrop-blur-md ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"].map(
          (item) => (
            <p key={item} className="cursor-pointer hover:text-gray-400 transition">
              {item}
            </p>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
