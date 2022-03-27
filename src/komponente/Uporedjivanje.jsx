import React from 'react'
import TelefonKartica from './TelefonKartica'
import TelefonUporedjivanje from './TelefonUporedjivanje'

function Uporedjivanje({telefoniUporedjivanje,brojTelefonaZaUporedjivanje}) {
  return (
    
    <div >
           
        {brojTelefonaZaUporedjivanje<2 ?
                <>
                        <p>Niste odabrali telefone za uporedjivanje</p>
                
                
                </>
        :
            <>

                {brojTelefonaZaUporedjivanje>4 ?
                         <>
                         <p>Odabrali ste previse telefona</p>
                 
                 
                      </>
                  :
                    <>
                     <table>
                     
                          <tbody>
                                <tr><th>Slika</th> {telefoniUporedjivanje.map((t)=> <td><img src={t.slika}  /></td> )}</tr>
                                <tr><th>Model</th> {telefoniUporedjivanje.map((t)=> <td>{t.model}</td> )}</tr>
                                <tr><th>Tezina</th> {telefoniUporedjivanje.map((t)=> <td>{t.tezina} g</td> )}</tr>
                                <tr><th>Ekran</th> {telefoniUporedjivanje.map((t)=> <td>{t.ekran} "</td> )}</tr>
                                <tr><th>RAM</th> {telefoniUporedjivanje.map((t)=> <td>{t.memorija} GB</td> )}</tr>
                                <tr><th>Kamera</th> {telefoniUporedjivanje.map((t)=> <td>{t.kamera}  </td> )}</tr>
                                <tr><th>Cena</th> {telefoniUporedjivanje.map((t)=> <td>{t.cena} RSD</td> )}</tr>
                                <tr><th>Baterija</th> {telefoniUporedjivanje.map((t)=> <td>{t.baterija} mA</td> )}</tr>
                                <tr><th>Boja</th> {telefoniUporedjivanje.map((t)=> <td>{t.boja}  </td> )}</tr>
              
                              
              
                                    
                        
                          </tbody>
                    </table> 


                    </>

                }





     

            </>
        
        
        }



      




    </div>





  )
}

export default Uporedjivanje