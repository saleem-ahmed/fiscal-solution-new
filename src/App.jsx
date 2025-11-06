import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Team from "./pages/team.jsx";
import Contact from "./pages/contact.jsx";
import Footer from "./component/footer.jsx";
import ServicesPage from "./pages/services.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
