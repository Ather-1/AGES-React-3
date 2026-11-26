import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Footer from './Components/Footer/Footer'
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ServicesPage from "./Pages/Services";
import ProjectsPage from "./Pages/Projects";
import ContactPage from "./Pages/Contact";
import ProjectDetail from "./Pages/ProjectDetail"


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
		<Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
	  <Footer />
    </BrowserRouter>
  );
};

export default App;
