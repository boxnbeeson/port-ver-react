import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

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
    </>
  );
}

export default App;
