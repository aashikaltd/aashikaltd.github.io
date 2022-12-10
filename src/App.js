import { Routes ,Route } from 'react-router-dom';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Services from './Components/Services';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Containers/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <main id="main">
        <Routes>                
          <Route path='/services' element={<Services />}/>  
          <Route path='/contact' element={<Contact />}/>               
          <Route path='/technologies' element={<Technologies />}/> 
          <Route path='/about' element={<About />}/>  
          <Route exact path='/' element={<Home />}/>        
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
