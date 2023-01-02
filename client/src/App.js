import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import Signup from './components/Sign-up/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/signin'element={<SignIn/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
