import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

            <ul>
                <li> <Link to="/">Pocetna</Link>  </li>
                <li><Link to="/telefoni">Telefoni</Link>  </li>
                <li><Link to="/onama">O nama</Link> </li>
               
            </ul>




    </div>
  )
}

export default Navbar