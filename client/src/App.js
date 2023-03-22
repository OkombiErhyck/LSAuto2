import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import About from "./about";
import Login from "./login";
import Signup from "./signup";
import Navbar from "./navbar";
import Footer from "./footer/footer";
import Home from "./home";
import Userpage from "./userpage";
import Write from "./write/Write"
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import { UserContextProvider } from './UserContext';
import PlacesPage from "./PlacesPage";
import IndexPage from "./IndexPage";
import PlacePage from "./PlacePage";
import ResetPassword from './reset-password';
import Despre from './despre';
import CookiePolicyPopup from './CookiePolicyPopup';
import Details from "./details";
import SplashScreen from "./SplashScreen";

axios.defaults.baseURL = "https://ls-auto2.vercel.app";  
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <UserContextProvider> 
        <Navbar/>
        <Routes>
          <Route path="/details" element={<Details/>}/>
          <Route path="/Write" element={<Write/>} />
          <Route path="/Write/:id" element={<Write/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/userpage" element={<Userpage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/PlacesPage" element={<PlacesPage/>} />
          <Route path="/IndexPage" element={<IndexPage/>}/>
          <Route path="/place/:id" element={<PlacePage/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/despre" element={<Despre/>}/>
        </Routes> 
        <Footer/>
      </UserContextProvider>
    </div>
  );
}

function Main() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isLoaded && <SplashScreen />}
      {isLoaded && <App />}
    </div>
  );
}

export default Main;
