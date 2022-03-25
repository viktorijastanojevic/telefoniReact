import logo from './logo.svg';
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './komponente/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter className="App">
           <Navbar></Navbar>
           <Footer></Footer>
       </BrowserRouter>
    </div>
  );
}

export default App;
