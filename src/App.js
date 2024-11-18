import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './component/Home/Homepage';
import Aboutpage from './component/About/Aboutpage';
import { Contactpage } from './component/Contact/Contactpage';
import { Routes, Route } from 'react-router-dom';




function App() {
  return(
  <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Contactpage" element={<Contactpage />} />
      </Routes >
   </>
      
      );
}

      export default App;
