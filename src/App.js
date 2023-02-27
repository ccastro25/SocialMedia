//import logo from './logo.svg';
//import './App.css';


import SignUp from "./Component/SignUP/SignUp";
import { AuthContextProvider } from './Context/AuthContext';

import MainContent from "./Component//MainContent/MainContent";

import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className="App">
          <AuthContextProvider>
              <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path ="/maincontent" element={<MainContent/>}/>
               </Routes>
          </AuthContextProvider>
    </div>
  );
}

export default App;
