import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types'; // ✅ Import PropTypes
import { Link } from 'react-router-dom';

function TitleCards({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGE4N2NmNzQyZGY5NzMzOGY2NWJlZWY1MjI2N2FmMCIsIm5iZiI6MTc0MDU1NTUyOC4xNDIwMDAyLCJzdWIiOiI2N2JlYzUwODU0NTg5Y2Q4NTc1NjE3MTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vOGpRaKWLdAFMg3U3nuFMfTWXmB0YoyHG9t2F5iTsqk'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error(err));

    const scrollContainer = cardsRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <div className="px-4 sm:px-6">
      <h2 className="mb-4 text-lg sm:text-xl font-bold text-white">
        {title || "Popular on Netflix"}
      </h2>

      <div
        ref={cardsRef}
        className="relative flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide px-2"
      >
        {apiData.map((card) => (
          <Link
            to={`/player/${card.id}`}
            key={card.id}
            className="relative min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105 hover:z-10"
          >
            <img
              src={card.backdrop_path ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}` : '/fallback-image.jpg'}
              alt={card.original_title}
              className="w-full h-auto rounded-lg border border-gray-800 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xs sm:text-sm font-medium text-center">
                {card.original_title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

TitleCards.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};

export default TitleCards;
