import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import cards_data from '../assets/cards/Cards_data';

function TitleCards({title,category}) {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGE4N2NmNzQyZGY5NzMzOGY2NWJlZWY1MjI2N2FmMCIsIm5iZiI6MTc0MDU1NTUyOC4xNDIwMDAyLCJzdWIiOiI2N2JlYzUwODU0NTg5Y2Q4NTc1NjE3MTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vOGpRaKWLdAFMg3U3nuFMfTWXmB0YoyHG9t2F5iTsqk'
    }
  };
  
  const handleWheel = (e) => {
    e.preventDefault(); 

    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    
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
        {apiData.map((card, index) => (
          <Link 
            to={`/player/${card.id}`}
            key={index}
            className="relative min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105 hover:z-10"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
              alt={card.original_title }
              className="w-full h-auto rounded-lg border border-gray-800 transition-transform duration-300"
            />
            {/* Dark Overlay on Hover (Netflix Effect) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-sm font-medium">{card.original_title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCards;
