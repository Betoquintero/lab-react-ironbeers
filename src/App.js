import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Beers from './views/Beers'
import NewBeer from './views/NewBeer'
import RandomBeer from './views/RandomBeer'
import BeerDetail from './views/BeerDetail'


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />                 
      <Route path="/beers" element={<Beers />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/beers/:beerId" element={<BeerDetail />} /> 
      <Route path="/new-beer" element={<NewBeer />} />      
    </Routes>
    </div>
  )
}

export default App;
