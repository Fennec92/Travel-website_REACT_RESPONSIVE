import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" />
            </Routes>
        </>
    );
};

export default App;
