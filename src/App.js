import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skills />
      <Portofolio />
     
    </div>
  );
}

export default App;
