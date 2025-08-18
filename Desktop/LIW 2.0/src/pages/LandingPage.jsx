// src/pages/LandingPage.jsx

import React from 'react';

// Importamos todos los componentes que forman la landing
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <Features />
        <Pricing />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}