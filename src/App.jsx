import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";

function App() {
  const navigate = useNavigate();
  const currentLocation = useLocation()
  console.log('location ',currentLocation);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user  ',user);
      
      if (user) {
        console.log("Logged In");
        if (currentLocation.pathname.includes('/player')) {
          console.log('its herehere');
          
          navigate(currentLocation.pathname);
        }else{
          navigate('/');
        }
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });

    return () => unsubscribe(); // Cleanup function to prevent memory leaks
  }, [navigate]); // ✅ Added navigate to dependency array

  return (
    <div className="bg-black min-h-screen">
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
