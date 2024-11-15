import React, { useEffect } from 'react';
import './App.css';

import Footer from './components/Footer/footer.jsx';
import Header from './components/Header/header.jsx';
import Slider from './components/Slider/slider.jsx';
import Projects from './components/Projects/projects.jsx';
import Enter from './components/Why/enter.jsx';
import Cooperation from './components/Cooperation/cooperation.jsx';
import Form from './components/Form/form.jsx';

import "normalize.css";


function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Slider />
      <Enter />
      <Projects />
      <Cooperation />
      <div className="elfsight-widget">
        <div className="elfsight-app-248d6ac2-2d2f-41b4-8426-888d301a7133" data-elfsight-app-lazy></div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
