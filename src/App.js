import './App.css';
/* import Home from './Project.js/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Project.js/Login';
import About from './Project.js/About';
import Contactus from './Project.js/Contactus';
import ButtonAppBar from './Project.js/NavBarDemo';
import Clickcounter from './HOC/Clickcounter';
import Counterhover from './HOC/Counterhover';
import HocksEx from './component.js/HocksEx'; */
import Loginform from './Form/Loginform';


function App() {
  return (
    <div className="App">
      <Loginform/>
    </div> 
    
    );
  }
  
  export default App;

 /* <ButtonAppBar/>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contactus" element={<Contactus/>}/>
  </Routes>
  </BrowserRouter>
  <Clickcounter/>
  <Counterhover/>
  <HocksEx/> */
