// import GatewayForm from "./GatewayForm";
//     <h1>Ubank Safe Guard Project</h1>
  //     <h2>Next line just for test</h2>
  //     <h2>Next line just for test</h2>
  //     <GatewayForm/>
    

import './App.css';
import { BrowserRouter} from "react-router";
import Routers from './Routers/Routes';
import { lazy } from 'react';
// const Routers =  lazy(() => import("./Routers/Routes.jsx"));

function App() {
  
  return (
    <>
     <BrowserRouter>
        <Routers/>
        
      </BrowserRouter>
    </>
  );
}

export default App;
