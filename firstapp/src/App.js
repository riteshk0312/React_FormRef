
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Myform1 from './Components/Myform1';




function App() {
  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
          < Route path='/' element = {<Home/>} />
          < Route path='/myform1' element = {<Myform1/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
