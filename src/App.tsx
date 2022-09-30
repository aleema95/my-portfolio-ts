import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
      </Routes> */}
      <ContactForm />
    </div>
  );
}

export default App;
