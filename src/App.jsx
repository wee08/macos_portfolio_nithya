import "./App.css";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, Navbar, Welcome } from "#components";
import {
  Contact,
  Finder,
  ImageWindowContent,
  Resume,
  Safari,
  Terminal,
  Textfile,
  Gallery,
} from "#windows";

gsap.registerPlugin(Draggable);
function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Textfile />
      <ImageWindowContent />
      <Contact />
      <Home />
      <Gallery />
    </main>
  );
}

export default App;
