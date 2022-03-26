import React from 'react'
import TelefonKartica from './TelefonKartica'

function Ponuda({telefoni}) {
  return (
    <div>
           
        {telefoni.map((t)=>(<TelefonKartica product={t}></TelefonKartica>))}





    </div>
  )
}

export default Ponuda