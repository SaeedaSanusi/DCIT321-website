import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <ProjectGrid />
      <Footer />
    </div>
  );
}

export default App; 