import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom";
import DogForm from "./components/DogForm/DogForm";
import LandingPage from './components/LandingPage/LandingPage';
import { SBackground } from './styles/SBackground';
import HomePage from './components/HomePage/HomePage';
import Detail from './components/HomePage/Detail/Detail';
import Nav from './components/Nav/Nav';


function App() {

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const login = (data) =>{

    navigate("/home")

  }

  return (

    <SBackground>
      {location.pathname !== "/" ? (<Nav/>) : null }
      <Routes>

        <Route path='/home/detail/:id'  element={<Detail/>}/>
        <Route path='/create'  element={<DogForm/>}/>

        <Route path='/' element={<LandingPage login={login}/>}/>

        <Route path='/home' element={<HomePage/>}/>

      </Routes>

    </SBackground>


  )
}

export default App
