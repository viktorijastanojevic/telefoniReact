import React from 'react'
import TelefonKartica from './TelefonKartica'

function Uporedjivanje({telefoniUporedjivanje}) {
  return (
    
    <div >
           
                {telefoniUporedjivanje.map((t)=>(<TelefonKartica key={t.id} product={t} ></TelefonKartica>))}





    </div>





  )
}

export default Uporedjivanje