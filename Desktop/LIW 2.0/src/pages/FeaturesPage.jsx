// src/pages/FeaturesPage.jsx

import React from 'react';

// Importamos los "bloques" que necesitamos para esta página
import Nav from '../components/Nav';
import Features from '../components/Features'; // <-- El componente clave para esta página
import Footer from '../components/Footer';

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-20"> {/* Espaciado consistente */}
        <Features />
      </main>
      <Footer />
    </>
  );
}