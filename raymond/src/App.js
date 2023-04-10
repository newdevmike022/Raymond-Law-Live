import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./sections/About";
import Arrow from "./sections/Arrow";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Services from "./sections/Services";
import Video from "./sections/Video";

const App = () => {
  return (
    <>
      <Nav/>
      <div className="container">
        <Home/>
        <About/>
        <Video/>
        <Services/>
        <Contact/>
        <Arrow/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
