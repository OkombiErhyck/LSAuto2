import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import { UserContextProvider } from './UserContext';
import SplashScreen from "./SplashScreen";

const About = lazy(() => import("./about"));
const Login = lazy(() => import("./login"));
const Signup = lazy(() => import("./signup"));
const Navbar = lazy(() => import("./navbar"));
const Footer = lazy(() => import("./footer/footer"));
const Home = lazy(() => import("./home"));
const Userpage = lazy(() => import("./userpage"));
const Write = lazy(() => import("./write/Write"));
const PlacesPage = lazy(() => import("./PlacesPage"));
const IndexPage = lazy(() => import("./IndexPage"));
const PlacePage = lazy(() => import("./PlacePage"));
const ResetPassword = lazy(() => import("./reset-password"));
const Despre = lazy(() => import("./despre"));
const CookiePolicyPopup = lazy(() => import("./CookiePolicyPopup"));
const Details = lazy(() => import("./details"));

axios.defaults.baseURL = "https://ls-auto2.vercel.app";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Suspense fallback={<SplashScreen />}>
          <Navbar />
          <Routes>
            <Route path="/details" element={<Details />} />
            <Route path="/Write" element={<Write />} />
            <Route path="/Write/:id" element={<Write />} />
            <Route path="/" element={<Home />} />
            <Route path="/userpage" element={<Userpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/PlacesPage" element={<PlacesPage />} />
            <Route path="/IndexPage" element={<IndexPage />} />
            <Route path="/place/:id" element={<PlacePage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/despre" element={<Despre />} />
          </Routes>
          <Footer />
        </Suspense>
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
      {isLoaded && (
        <Suspense fallback={<SplashScreen />}>
          <App />
        </Suspense>
      )}
    </div>
  );
}

export default Main;
