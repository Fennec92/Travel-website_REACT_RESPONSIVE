import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Action from "./components/Pages/Action";
import Meditation from "./components/Pages/Meditation";
import You from "./components/Pages/You";
import Explore from "./components/Pages/Explore";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/action" element={<Action />} />
                <Route path="/meditation" element={<Meditation />} />
                <Route path="/you" element={<You />} />
                <Route path="/explore" element={<Explore />} />
            </Routes>
        </>
    );
};

export default App;
