import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Solucoes from './pages/Solucoes';
import Contato from './pages/Contato';
import Blog from './pages/Blog';
import LGPD from './pages/LGPD';
import Denuncias from './pages/Denuncias';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="/denuncias" element={<Denuncias />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
