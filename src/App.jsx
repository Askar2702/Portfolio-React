import TopBar from "./Component/TopBar/TopBar";
import Intro from "./Component/Intro/Intro";
import Portfolio from "./Component/Portfolio/Portfolio";
import Works from "./Component/Works/Works";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Menu from "./Component/Menu/Menu";
import "./App.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
