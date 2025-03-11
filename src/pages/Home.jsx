import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";
import avatar from "../assets/avatar.jpg";
import avatar_tittle from "../assets/avatar_tittle.png";
import playIcon from "../assets/play_icon.png";
import infoIcon from "../assets/info_icon.png";
import Footer from "../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative top-0 w-full min-h-screen bg-black">
      <Navbar />

      <div className="relative w-full h-[85vh]">
        <div className="absolute inset-0">
          <img
            src={avatar}
            alt="Hero Banner"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-24 left-[4%] text-white max-w-[700px] z-10">
          <img 
            src={avatar_tittle} 
            alt="Hero Title" 
            className="w-[1000%] max-w-[550px] mb-4"
          />
          <p className="text-[17px] w-[500px] leading-relaxed mb-4">
            Hakan, an ordinary shopkeeper in Istanbul, discovers he is the city&apos;s
            destined protector. With ancient powers and a secret order guiding him,
            he must battle dark forces and uncover his true destiny.
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button 
              className="bg-white text-black flex items-center gap-2 px-6 py-2 text-lg font-semibold rounded hover:bg-gray-300 transition"
              onClick={() => setIsOpen(true)}
            >
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

      {/* Trailer Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-[1000%] max-w-8xl">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* YouTube Trailer */}
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/LdaLORCLQb8?autoplay=1"
              title="Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="mt-8 px-6">
        <TitleCards />
      </div>
      <div className="mt-8 px-6">
        <TitleCards title={"Top Pics for you"}  category={"top_rated"} />
        <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
        <TitleCards title={"Only on Netflix"} category={"upcoming"} />
        <TitleCards title={"Upcoming"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
