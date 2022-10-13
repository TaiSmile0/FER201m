import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Detail from './components/Detail';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from './components/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <body>
      <div >
        <Navigation />
        <Routes><Route path='/' element={<Main />}> </Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </body>

  );
}

export default App;