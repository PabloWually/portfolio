import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/Navbar/Navbar";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
