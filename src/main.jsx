import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import spinner from "./assets/netflix_spinner.gif"; 

// Lazy load App component
const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-black">
            <img src={spinner} alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
