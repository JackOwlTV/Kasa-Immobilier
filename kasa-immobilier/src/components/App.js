import { Routes, Route } from "react-router-dom";
import Home from './home';
import Error from './error';
import About from './about';
import Logement from './logement'
import Navbar from './navbar'
import "../styles/App.css";

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
