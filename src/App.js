import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Landing from './components/landing';
import Conversions from './components/Conversions';
import LongestW from './components/longestWord';
import KmToMiConverter from './components/converter';
import Counter from './components/Counter';
import AboutMe from './components/AboutMe';
import ObjSort from './components/ObjectSorting';
import Palindrome from './components/Palindrome';
import DoubleTap from './components/Counter2';
import ToDoList from './components/Todo';

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
            <Route path='longestword' element={<LongestW />}/>
            <Route path='/converter' element={<KmToMiConverter />}/>
            <Route path='/counter' element={<Counter />}/>
            <Route path='/aboutme' element={<AboutMe />}/>
            <Route path='/objectsort' element={<ObjSort />}/>
            <Route path="/palindrome" element={<Palindrome />}/>
            {/* pass prop to child */}
            <Route path="/dev" element={<DoubleTap />}/>
            <Route path='/todo' element={<ToDoList />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
