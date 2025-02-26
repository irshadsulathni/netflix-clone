import back_arrow from "../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGE4N2NmNzQyZGY5NzMzOGY2NWJlZWY1MjI2N2FmMCIsIm5iZiI6MTc0MDU1NTUyOC4xNDIwMDAyLCJzdWIiOiI2N2JlYzUwODU0NTg5Y2Q4NTc1NjE3MTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vOGpRaKWLdAFMg3U3nuFMfTWXmB0YoyHG9t2F5iTsqk",
      },
    };
  
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);
  

  return (
    <div className="relative text-white h-screen w-full flex flex-col items-center justify-center bg-black">
      {/* Back Button */}
      <img
        onClick={() => navigate(-1)}
        src={back_arrow}
        alt="Back"
        className="absolute top-6 left-6 w-12 cursor-pointer bg-black/50 p-2 rounded-full hover:bg-black/80 transition"
      />

      {/* Video Player */}
      {apiData ? (
        <iframe
          className="w-full h-full aspect-video rounded-lg mt-10"
          src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&controls=1`}
          title={apiData.name || "Trailer"}
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-gray-400 text-lg mt-10">No trailer available</p>
      )}

      {/* Video Details */}
      {apiData && (
        <div className="absolute bottom-6 left-6 w-[90%] flex flex-col text-gray-300 text-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-2">
            {apiData.name || "No Title"}
          </h1>
          <div className="flex gap-4 text-sm md:text-lg">
            <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : "N/A"}</p>
            <p className="uppercase font-semibold text-white">{apiData.type || "No type"}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Player;
