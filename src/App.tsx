import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About';
import Installatiion from './components/Install/Installatiion';
import Preloader from './components/Home/Preloader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before showing the homepage
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={loading ? <Preloader /> : <Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/documentaion" element={<Installatiion />} />
      </Routes>
    </Router>
  );
}

export default App;
