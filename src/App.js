import Dashboard from "./pages/Dashboard";
import Delete from "./pages/Delete";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const token = localStorage.getItem('token')
  const [tok, setTok] = useState(true)


  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
const func = () => {

  if (token !== null) {
    setTok(false)
  } else if(token === "rhealhello"){
    setTok(true)
  }
}
  func()
  }, [token])




  //Compare()
  return (
    <div className="App overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={tok?<Login/> : <Dashboard/>}  />
        <Route path="/login" element={tok?<Login/> : <Dashboard/>}/>
        <Route path="/dashboard/:_id" element={<Delete/>} />

      </Routes>
      
    </div>
  );
}

export default App;
