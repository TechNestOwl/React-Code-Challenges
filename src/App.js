import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      
      <Hero/>
      <NavBar/>
      {/* <Button>this is a b</Button> */}
      <Footer/>
    </div>
  );
}

export default App;
