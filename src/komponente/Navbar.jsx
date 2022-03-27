import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({sortiraj}) {
  return (
    <div>

            <ul className='listaNavbar'>
                <li className='elementListeNavbar'> <Link to="/">Pocetna</Link>  </li>
                <li className='elementListeNavbar'><Link to="/telefoni">Telefoni</Link>  </li>
                <li className='elementListeNavbar'><Link to="/uporedi">Uporedi</Link> </li>
               


                 <li><button className='sortiranje' onClick={()=>sortiraj()}>Sortiraj</button></li>
            </ul>




    </div>
  )
}

export default Navbar