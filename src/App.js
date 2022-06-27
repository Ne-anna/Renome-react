import Navigation from "./Components/Organisms/Navigation/navigation";
import Carousel from "./Components/Organisms/Carousel/carousel";
import About from "./Components/Organisms/About/About";
import Gallery from "./Components/Organisms/Gallery/gallery";
import Footer from "./Components/Organisms/Footer/footer";
import getData from 'src/fetchlist.js'
import React, { useEffect, useState } from 'react';
import "./app.scss";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getData()
      .then(items => setItems(items))
  }, [])

  return (
    <div className="App">
      <header>
        <Navigation
          data={items.navigation}
          cartData={items.cart}
          menuData={items.menu}
          backButtonData={items.backButtonTitle} />
      </header>
      <main>
        <Carousel data={items.carousel} />
        <About data={items.about} />
        <Gallery data={items.gallery} />
      </main>
      <footer>
        <Footer data={items.footer} />
      </footer>
    </div >
  );
}

export default App;
