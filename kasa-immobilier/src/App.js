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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logement/:id' element={<Logement />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
