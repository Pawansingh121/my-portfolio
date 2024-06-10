import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Navbar />
      <Home />
      <Marquee />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
