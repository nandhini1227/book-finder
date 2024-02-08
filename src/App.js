import React  from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <main className="container mx-auto max-w-5xl px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="search/:key" element={<Search />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <>
      <Hero />
      {/* Include any content that you want to show for the root path ("/") */}
    </>
  );
}

export default App;
