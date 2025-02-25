import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";
import heroBanner from "../assets/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";
import playIcon from "../assets/play_icon.png";
import infoIcon from "../assets/info_icon.png";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative top-0 w-full min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[85vh]">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-24 left-[4%] text-white max-w-[700px] z-10">
          <img 
            src={heroTitle} 
            alt="Hero Title" 
            className="w-[90%] max-w-[420px] mb-4"
          />
          <p className="text-[17px] leading-relaxed mb-4">
            Hakan, an ordinary shopkeeper in Istanbul, discovers he is the city&apos;s
            destined protector. With ancient powers and a secret order guiding him,
            he must battle dark forces and uncover his true destiny.
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button className="bg-white text-black flex items-center gap-2 px-6 py-2 text-lg font-semibold rounded hover:bg-gray-300 transition">
              <img src={playIcon} alt="Play Icon" className="w-[25px]" />
              Play
            </button>
            <button className="bg-gray-700/50 text-white flex items-center gap-2 px-6 py-2 text-lg font-semibold rounded hover:bg-gray-600 transition">
              <img src={infoIcon} alt="More Info" className="w-[25px]" />
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 px-6">
        <TitleCards />
      </div>
      <div className="mt-8 px-6">
        <TitleCards title={"Top Pics for you"} />
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
