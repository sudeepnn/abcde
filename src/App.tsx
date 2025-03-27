import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
import './App.css';
// import Home from './components/Home/Home';
import About from './components/About';
import Installatiion from './components/Install/Installatiion';
// import Preloader from './components/Home/Preloader';
import HomeWithPreloader from './components/Home/HomeWithPreloader';


function App() {
  // const [loading, setLoading] = useState(true);

  

  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomeWithPreloader />} />

      
        <Route path="/about" element={<About />} />
        <Route path="/documentation" element={<Installatiion />} />
      </Routes>
    </Router>
  );
}

export default App;
