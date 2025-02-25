import { useEffect, useRef } from 'react';
import cards_data from '../assets/cards/Cards_data';

function TitleCards({title}) {
  const cardsRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault(); 

    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const scrollContainer = cardsRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="px-6">
      <h2 className="mb-4 text-xl font-bold text-white"> {title?title : "Popular on Netflix"} </h2>

      {/* ✅ Scrollable Container */}
      <div
        ref={cardsRef} // ✅ Applied to the scrollable div
        className="relative flex gap-4 overflow-x-auto scrollbar-hide px-2"
      >
        {cards_data.map((card, index) => (
          <div
            key={index}
            className="relative min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105 hover:z-10"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-auto rounded-lg border border-gray-800 transition-transform duration-300"
            />
            {/* Dark Overlay on Hover (Netflix Effect) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-sm font-medium">{card.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TitleCards;
