import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";
import WhatsAppIcon from '../header/contact';

// ScrollToTop Component
function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

// Main App Component
export default function App() {
  const [loading, setLoading] = useState(true);
  const text = "Crafting Intelligence";

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 5000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">
          {text.split("").map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255, 255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
        <WhatsAppIcon/>
      </ScrollToTop>
    </Router>
  );
}
