import './App.css';
import Header from './components/header';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Content from './components/content';
import Footer from './components/footer';
import Product from './components/product';



function App() {
  return (
    <div className="App">
     
     
     <div>
     <Header />
     
    
     </div>
    
     <Routes>
     <Route path='/Home' element={ <Home />} /> 
     <Route path='/products' element={ <Content />} />
     <Route path='/products/:id' element={<Product />} />
     <Route path='/About'  element={<Footer />} />
     </Routes>
     
     
     
    </div>
  );
}

export default App;
