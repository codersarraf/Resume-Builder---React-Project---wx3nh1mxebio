import React,{useState} from 'react'
import '../styles/App.css';
import Navbar from './Navbar';
import Homepage from './pages/Homepage';
import Routing from './Routing';
import ResumeBuilder from './pages/ResumeBuilder';
import Footer from './Footer';


const App = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div id="main">
      <Routing />
      {show ? <ResumeBuilder/> : <Homepage setShow={setShow}/>}
      
    </div> 
    
  )
}


export default App;
