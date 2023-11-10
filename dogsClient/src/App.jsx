import './App.css'
import {Routes, Route} from "react-router-dom";
import DogForm from "./components/DogForm/DogForm";

function App() {


  return (

    <Routes>

      <Route path='/create'  element={<DogForm/>}/>

    </Routes>

  )
}

export default App
