import logo from './logo.svg';
import './App.css';
import './Carousel.js';
import './Gallery.js';
import './Nav.js';
import Carousel from './Carousel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Nav></Nav>
        <Gallery></Gallery> */}
      </header>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
