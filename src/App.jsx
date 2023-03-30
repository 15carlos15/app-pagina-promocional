import "./App.css";
import { Page1 } from "./components/page1";
import { Page2 } from "./components/page2";
import { Page3 } from "./components/page3";
import Navbar from "./components/navbar";
import { Page4 } from "./components/page4";
import { Page5 } from "./components/page5";
import Footer from "./components/footer";

function App() {
  return (
    <main>
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
    </main>
  );
}

export default App;
