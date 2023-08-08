import './App.css';
import './styles.css';
import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
