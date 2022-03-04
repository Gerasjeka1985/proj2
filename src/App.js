import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import Nav from './Nav';
import './styles/style.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const homeNav = {
    footer: {
      texts: [

        { "discr": "придумать" },
        { "discr": "придумать" },
        { "discr": "придумать" },
        { "discr": "придумать" },
      ],
      text2: [

        { "discr": "придумать" },
        { "discr": "придумать" },
        { "discr": "придумать" },
        { "discr": "придумать" },
      ],
      social: [
        { 'src': './images/socials/socials.svg' },
        { 'src': './images/socials/socials2.svg' },
        { 'src': './images/socials/socials3.svg' }
      ]
    },
    slr2: [
      { "link": "#", "src": "./images/slide2_1.png" },
      { "link": "#", "src": "./images/slide2_2.png" },
      { "link": "#", "src": "./images/slide2_3.png" },
    ],
    backImg: './images/logo.svg',
    nav: [
      { "link": "#", "text": "Главная" },
      { "link": "#", "text": "Каталог" },
      { "link": "#", "text": "доставка" },
      { "link": "#", "text": "продумать" },
    ],
    icons: [
      { "link": "#", "src": "./images/profile.png" },
      { "link": "#", "src": "./images/korzina.png" },
      { "link": "#", "src": "./images/poisk.png" },
    ],
    slider: [
      { 'src': './images/sld/1.png', 'key': "one" },
      { 'src': './images/sld/2.png', 'key': "two" },
      { 'src': './images/sld/3.png', 'key': "middle" },
      { 'src': './images/sld/4.png', 'key': "four" },
      { 'src': './images/sld/5.png', 'key': "five" },
    ],
    discr: './images/bag.png',
    discr2: './images/notebook.png',

  }
  return (
    <>
      <Router>
        <Nav data={homeNav} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
      <Footer data={homeNav.footer} />
    </>
  );
}

export default App;
