import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../sass/style.scss';
import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
// import Swiper from '.Swiper';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      {/* <Route path="/Works" component={Works} />
      <Route path="/Works/:id" component={Work} />
      <Route path="/Contact" component={Contact} /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
