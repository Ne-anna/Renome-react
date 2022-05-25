import Navigation from "./Components/Organisms/Navigation/navigation";
import About from "./Components/Organisms/About/About";
import Gallery from "./Components/Organisms/Gallery/gallery";
import Footer from "./Components/Organisms/Footer/footer";
import jsonFile from "./db.json";
import "./app.scss";

function App() {
  const articles = jsonFile.about;
  const gallery = jsonFile.gallery;
  const footer = jsonFile.footer;

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <About articles={articles} />
      <Gallery gallery={gallery} />
      <footer>
        <Footer footer={footer} />
      </footer>
    </div >
  );
}

export default App;
