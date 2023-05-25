import { Routes, Route } from "react-router-dom";
import Home from './Home/home';
import Error from './Error/error';
import About from './About/about';
import Logement from './Logement/logement'
import Navbar from './navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/*' element={<Error/>} />
        <Route path='/logement/*' element={<Error/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/logement/:id' element={<Logement/>} />
      </Routes>
    </div>
  );
}

export default App;
