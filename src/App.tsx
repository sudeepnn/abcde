import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
import './App.css';
// import Home from './components/Home/Home';

import Installatiion from './components/Install/Installatiion';
// import Preloader from './components/Home/Preloader';
import HomeWithPreloader from './components/Home/HomeWithPreloader';
import OpenSourceProjects from './components/Solution/Projects';
import Industrialapplication from './components/Solution/Industrialapplication';
import CourseEnrollment from './components/Solution/Course';


function App() {
  // const [loading, setLoading] = useState(true);

  

  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<HomeWithPreloader />} />

      
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/industrial-application" element={<Industrialapplication />} />
        <Route path="/open-source-projects" element={<OpenSourceProjects />} />
        <Route path="/course" element={<CourseEnrollment />} />
        <Route path="/documentation" element={<Installatiion />} />
      </Routes>
    </Router>
  );
}

export default App;
