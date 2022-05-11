
import About from './Components/Organisms/About/About';
import jsonFile from './db.json';

function App() {
  const articles = jsonFile.About;

  return (
    <div className="App">
      <About {...articles} />
    </div>
  );
}

export default App;
