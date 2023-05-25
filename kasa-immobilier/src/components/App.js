import { Routes, Route } from "react-router-dom";
import Home from './Home/home';
import Error from './Error/error';
import About from './About/about';
import Logement from './Logement/logement'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/error404' element={<Error/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/logement' element={<Logement/>} />
      </Routes>
    </div>
  );
}

export default App;
