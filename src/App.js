import logo from './logo.svg';
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter className="App">
           <Navbar></Navbar>
       </BrowserRouter>
    </div>
  );
}

export default App;
