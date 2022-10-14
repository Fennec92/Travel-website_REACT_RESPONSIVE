import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Routes>
                <Route path="/" />
            </Routes>
        </>
    );
};

export default App;
