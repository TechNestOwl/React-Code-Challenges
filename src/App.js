import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import MainSection from './components/landing';

function App() {
  return (
    <div className="App">
      
      <Hero/>
      <NavBar/>
      <MainSection />
      <Footer/>
    </div>
  );
}

export default App;
