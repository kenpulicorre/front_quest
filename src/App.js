import NavBar from "./components/menu/NavBar";
import Banner from "./components/banner/banner";
import Animation from "./components/animation/animation";
import Services from "./components/servicios/servicios";
import Parallax from "./components/parallax/parallax";
import Branding from "./components/branding/branding";
import News from "./components/news/news";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Banner />
        <Animation />
        <Services />
        <Parallax />
        {/* <Branding /> */}
        <hr />
        {/* <News />
        <Footer /> */}
      </main>
    </div>
  );
}

export default App;
