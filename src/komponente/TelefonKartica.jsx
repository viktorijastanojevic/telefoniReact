import React from 'react'
import { DiGitCompare } from 'react-icons/di';
import { BsFillPhoneFill,BsFillCameraFill,BsBatteryFull } from 'react-icons/bs';
import { MdMemory,MdMobileScreenShare,MdPriceChange } from 'react-icons/md';
import { FaWeightHanging } from 'react-icons/fa';


function TelefonKartica({product,dodajTelefon}) {
  return (
    <div className="card">
     
    <div className="card-header" >
         <img className='card-img-top'  src ={product.slika}   /> 
    </div>
    <div className="card-body">
        
        
        <h4 className = "naslovKartice"> <BsFillPhoneFill></BsFillPhoneFill> {product.model}   </h4>
        <p className="opisProizvoda"> <BsFillCameraFill></BsFillCameraFill>{product.kamera} MP</p>
        <p className="opisProizvoda"> <MdMemory></MdMemory>{product.memorija} GB</p>
       
        <p className="opisProizvoda"> <FaWeightHanging></FaWeightHanging>{product.tezina} g</p>
        <p className="opisProizvoda"> <MdMobileScreenShare></MdMobileScreenShare>{product.ekran} "</p>
        <p className="opisProizvoda"> <BsBatteryFull></BsBatteryFull>{product.baterija} mAh</p>
        
        <p className='cenaRegularna'> <MdPriceChange></MdPriceChange> {product.cena} RSD </p>   
        
       
         <button className='btn' onClick={()=>dodajTelefon(product.id)}> Uporedi <DiGitCompare></DiGitCompare></button>
        
    </div> 
</div>
  )
}

export default TelefonKartica