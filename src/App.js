
import About from './Components/Organisms/About/About';

function App() {
  const articles = { title: 'about', subtitle: 'We create delicious memories', body: "enome it is renowned restaurant delights the senses with elegant ambiance, gracious service and delectable menus in the heart of Manhattan’s. The distinctive setting boasts contemporary furnishings and finishes atop the restaurant’s grand modern architecture. Renome offers the room for private dining where guests enjoy creative foods and sumptuous late night desserts. Is one of the few Manhattan restaurants to have a coveted 3-star Michelin rating.", id: 1 }

  return (
    <div className="App">
      <About {...articles}/>
    </div>
  );
}

export default App;
