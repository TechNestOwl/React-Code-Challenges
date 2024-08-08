import './App.css';
import Hero from './components/hero';
import NavBar from './components/navBar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      
      <Hero/>
      <NavBar/>
      <Button>this is a b</Button>
    </div>
  );
}

export default App;
