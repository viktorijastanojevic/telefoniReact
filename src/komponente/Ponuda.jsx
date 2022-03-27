import React from 'react'
import TelefonKartica from './TelefonKartica'

function Ponuda({telefoni,dodajTelefon,sort}) {
  return (
    <div className='sviTelefoni'>
           

      {sort==true? 
      
          <>
              {telefoni
                  .sort((a,b)=> a.cena <b.cena?-1:1) 
                  .map((t)=>(<TelefonKartica key={t.id} product={t} dodajTelefon={dodajTelefon}></TelefonKartica>))}
          
          </>
    
        :

              <>
                {telefoni
                  .sort((a,b)=> a.cena <b.cena?1:-1) 
                  .map((t)=>(<TelefonKartica key={t.id} product={t} dodajTelefon={dodajTelefon}></TelefonKartica>))}
              </>
     }



        





    </div>
  )
}

export default Ponuda