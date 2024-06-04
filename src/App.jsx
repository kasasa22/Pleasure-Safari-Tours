import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutUs from "./components/AboutUs";
import Services from "./components/Services.jsx";
import Packages from "./components/Packages.jsx";
import Blogs from "./components/Blogs.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero  />
    <AboutUs/>
    <Services/>
    <Packages/>
    <Blogs/>
    <Footer/>

   



    

    
    </>
  )
}

export default App
