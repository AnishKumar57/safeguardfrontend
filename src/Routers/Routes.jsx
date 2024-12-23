import { Routes, Route } from "react-router-dom";
import Login from './Components/Login'; 

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> 
    </Routes>
  );
};

export default Routers;