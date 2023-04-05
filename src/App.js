import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBarNet from "./componet/NavBarNet";

import Footer from "./componet/Footer";
import MovieDetails from "./componet/MovieDetails";
import Home from "./componet/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TvMovie from "./componet/TvMovie";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarNet />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvMovie" element={<TvMovie />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
