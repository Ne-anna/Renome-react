import Grid from './Components/Molecules/grid-image/grid';
import About from './Components/Organisms/About/About';
import Footer from './Components/Organisms/Footer/footer';
import jsonFile from './db.json';
import './app.scss';

function App() {
  const articles = jsonFile.about;
  const images = jsonFile.about.images;
  const footer = jsonFile.footer;

  return (
    <div className="App">
      <div className="about-container">
        <Grid {...images} />
        <About {...articles} />
      </div>
      <footer>
        <Footer {...footer} />
      </footer>
    </div>
  );
}

export default App;
