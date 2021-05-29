import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Particles 
        params={{
          particle: {
            number: {
              value: 30,
              density:{
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type: "circle",
              stroke:{
                width: 6
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
