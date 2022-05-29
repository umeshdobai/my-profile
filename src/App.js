// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./componentsOld/Home";
// import Navbar from "./componentsOld/Navbar";
// import WorkExperience from "./componentsOld/WorkExperience";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            {/* <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work-exp" element={<WorkExperience />} />
                </Routes>
            </BrowserRouter> */}
            <Navbar/>
            <Home />
        </div>
    );
}

export default App;
