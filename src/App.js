import './App.css';
import Home from "./routes/Home"; 
import About from "./routes/About"; 
import Contact from "./routes/Contact"; 
import Proyect from "./routes/Proyect"; 
import { Route, Routes } from "react-router-dom" ; 

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/project" element ={<Proyect/>}/>
      <Route path="/contact" element ={<Contact/>}/>
    </Routes>
    </>
  );
}



export default App;
