import Grid from './Components/Molecules/grid-image/grid';
import About from './Components/Organisms/About/About';
import './app.scss';
import jsonFile from './db.json';

function App() {
  const articles = jsonFile.about;
  const images = jsonFile.about.images;

  return (
    <div className="App">
      <div className="about-container">
        <Grid {...images} />
        <About {...articles} />
      </div>
    </div>
  );
}

export default App;
