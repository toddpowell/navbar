import './App.css';
import './styles.css';
import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Pricing from './Pages/Pricing';

function App() {
  let Component = Home;
  let componentDiv = <Home></Home>;

  switch (window.location.pathname) {
    case "/":
      Component = Home;
      componentDiv = <Home></Home>;
      break;
    case "/pricing":
      Component = Pricing;
      componentDiv = <Pricing></Pricing>;
      break;
    case "/about":
      Component = About;
      componentDiv = <About></About>;
      break;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <Component/>
        {componentDiv}
      </div>
    </>
  );
}

export default App;
