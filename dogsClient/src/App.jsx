import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom";
import DogForm from "./components/DogForm/DogForm";
import LandingPage from './components/LandingPage/LandingPage';
import { SBackground } from './styles/SBackground';
import HomePage from './components/HomePage/HomePage';


function App() {

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const login = (data) =>{

    navigate("/home")

  }

  return (

    <SBackground>
      
      <Routes>

        <Route path='/create'  element={<DogForm/>}/>

        <Route path='/' element={<LandingPage login={login}/>}/>

        <Route path='/home' element={<HomePage/>}/>

      </Routes>

    </SBackground>


  )
}

export default App
