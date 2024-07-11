import './App.css';


import Footer from './components/Footer/footer.jsx';
import Header from './components/Header/header.jsx';
import Slider from './components/Slider/slider.jsx';
import Projects from './components/Projects/projects.jsx';
import Icons from './components/Why/Icons.jsx';
import Cooperation from './components/Cooperation/cooperation.jsx';
import Form from './components/Form/form.jsx';

import "normalize.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Icons />
      <Projects/>
      <Cooperation/>
      <div><script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      <div class="elfsight-app-248d6ac2-2d2f-41b4-8426-888d301a7133" data-elfsight-app-lazy></div></div>
      <Form />
      <Footer />
    </div>
  );
} 


export default App;
