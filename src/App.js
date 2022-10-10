import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer'

import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ProjectDisplay from './pages/ProjectDisplay';
import Contact from './pages/Contact';

function App() {
  document.title="Erlend Lokna";
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/prosjekter" element={<Projects/>} />
            <Route path="/prosjekter/:id" element={<ProjectDisplay />} />
            <Route path="/erfaring" element={<Experience/>} />
            <Route path='/kontakt' element = {<Contact />} />

          </Routes>
        <Footer />
        </Router>

    </div>
  );
}

export default App;
