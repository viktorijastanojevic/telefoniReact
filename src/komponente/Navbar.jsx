import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

            <ul className='listaNavbar'>
                <li className='elementListeNavbar'> <Link to="/">Pocetna</Link>  </li>
                <li className='elementListeNavbar'><Link to="/telefoni">Telefoni</Link>  </li>
                <li className='elementListeNavbar'><Link to="/uporedi">Uporedi</Link> </li>
               
            </ul>




    </div>
  )
}

export default Navbar