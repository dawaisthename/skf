import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutusPage from "./pages/AboutusPage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const [loading, setLoading] = useState(false); // Start as false
  const location = useLocation(); // To track route changes

  useEffect(() => {
    console.log("Location changed:", location.pathname); // Check when location changes
    setLoading(true); // Start loading when the route changes

    // Simulate a delay before hiding the loader
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 1 second
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [location]); // Re-run effect whenever route changes

  return (
    <div>
      {loading ? (
        <LoadingPage /> // Show loading spinner
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
