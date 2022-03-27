import logo from './logo.svg';
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './komponente/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pocetna from './komponente/Pocetna';
import Ponuda from './komponente/Ponuda';
import { useState } from "react";
import Uporedjivanje from './komponente/Uporedjivanje';

function App() {
  const [telefoniUporedjivanje, setTelefoniUporedjivanje] = useState([]);
  const [brojTelefonaZaUporedjivanje, setBrTelZaUp] = useState(0);
  const [telefoni] = useState([

    {
      id:1,
      model: "Xiamo mi 11T",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000,
      kamera: 108,
      memorija: 128,
      boja: "siva",
      cena: 60000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/023/large/180916.webp",
      uporedi:0

    },
    {
      id:2,
      model: "Xiamo mi 10T",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000,
      kamera: 108,
      memorija: 128,
      boja: "siva",
      cena: 60000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/023/large/180916.webp",
      uporedi:0

    },
    {
      id:3,
      model: "AAAAAA",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000,
      kamera: 108,
      memorija: 128,
      boja: "siva",
      cena: 60000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/023/large/180916.webp",
      uporedi:0

    },
    {
      id:4,
      model: "BBBBBB",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000,
      kamera: 108,
      memorija: 128,
      boja: "siva",
      cena: 60000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/023/large/180916.webp",
      uporedi:0

    },



  ]);

function dodajTelefon(id){
   
    setBrTelZaUp(brojTelefonaZaUporedjivanje+1); 
    telefoni.forEach((t)=>{
        if(t.id==id){
          t.uporedi=1;
        }
    })


    let uporediti = telefoni.filter((t)=> t.uporedi==1);
    setTelefoniUporedjivanje(uporediti);

}




  return (
    <div className="App">
      <BrowserRouter className="App">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/telefoni" element={ <Ponuda  telefoni={telefoni} dodajTelefon={dodajTelefon}></Ponuda>}></Route>
            <Route path="/uporedi" element={ <Uporedjivanje telefoniUporedjivanje={telefoniUporedjivanje} brojTelefonaZaUporedjivanje={brojTelefonaZaUporedjivanje}></Uporedjivanje>}></Route>
            
        </Routes>
           
          
          <Footer></Footer>
       </BrowserRouter>
    </div>
  );
}

export default App;
