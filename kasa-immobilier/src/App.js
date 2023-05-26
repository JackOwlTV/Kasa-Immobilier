import { Routes, Route } from "react-router-dom";
import Home from './page/home';
import Error from './page/error';
import About from './page/about';
import Logement from './page/logement'
import Navbar from './components/navbar'
import "./styles/App.css";

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
