import React from 'react'

function TelefonKartica({product}) {
  return (
    <div className="card">
     
    <div className="card-header" >
         <img className='card-img-top'  src ={product.slika}   /> 
    </div>
    <div className="card-body">
        
        
        <h4 className = "naslovKartice">  {product.model}   </h4>
        <p className="opisProizvoda">{product.kamera}</p>
        <p className="opisProizvoda">{product.memorija}</p>
        <p className="opisProizvoda">{product.kamera}</p>
        <p className="opisProizvoda">{product.tezina}</p>
        <p className="opisProizvoda">{product.ekran}</p>
        <p className="opisProizvoda">{product.baterija}</p>




        
        <p className='cenaRegularna'>  {product.cena}  </p>   
        
       
         
        
    </div> 
</div>
  )
}

export default TelefonKartica