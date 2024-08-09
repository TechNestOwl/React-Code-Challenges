import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Landing from './components/landing';
import Conversions from './components/Conversions';

function App() {
  return (
    <Router>
      <div className="App">
        <Hero/>
        <NavBar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path='/Conversions' element={<Conversions />}/>

          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
