import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar.jsx"
import './App.css';

function App() {
  return (
    <div className='App'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}></Route>
      </Routes>
    </div>
  )

}

export default App;
