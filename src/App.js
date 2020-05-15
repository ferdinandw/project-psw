import React from 'react';
import Navbar from './Components/Navbar'
import Jumbotron from './Components/Page/Jumbotron'
import Carousel from './Components/Page/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Jumbotron/>
    </div>
  );
}

export default App;
