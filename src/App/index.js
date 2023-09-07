// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StationInformation } from "../StationInformation";
import { Home } from '../Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/station/:id' element={<StationInformation />}></Route>
      </Routes>
    </ Router>
  );
}

export default App;
