// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Asegúrate de que estos imports son correctos
import LandingPage from './pages/LandingPage';
import PreciosPage from './pages/PreciosPage';
import FeaturesPage from './pages/FeaturesPage';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Routes>
        {/* ESTA LÍNEA ES LA MÁS IMPORTANTE PARA EL ERROR 404 */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/precios" element={<PreciosPage />} />
        <Route path="/caracteristicas" element={<FeaturesPage />} />
      </Routes>
    </div>
  );
}