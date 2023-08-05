
import React from 'react'
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/course/Courses';
import Teacher from './pages/Teacher';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
}

export default App