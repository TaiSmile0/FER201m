
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Detail from './components/Detail'; 
import Contact from './components/Contact';
import News from './components/News';
import About from './components/About';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
          <Route path='/' element={<Main/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;