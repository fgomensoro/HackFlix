import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchPageName from "./pages/SearchPageName";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search_by_name" element={<SearchPageName />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

function PageNotFound() {
  return (
    <div className="error404">
      <h2>404 Page not found</h2>
    </div>
  );
}
export default App;
