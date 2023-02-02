import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from "../App";
import ItemDetails from "./ItemDetails";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="/ItemDetails/:id" element={<ItemDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
