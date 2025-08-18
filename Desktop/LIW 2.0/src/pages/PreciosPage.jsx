// src/pages/PreciosPage.jsx

import React from 'react';

// Importamos los "bloques" que vamos a usar
import Nav from '../components/Nav';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function PreciosPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-20"> {/* Damos espacio para que no se pegue al menú/footer */}
        <Pricing />
      </main>
      <Footer />
    </>
  );
}