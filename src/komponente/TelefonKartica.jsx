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
        <hr />
        <h6 className="opisProizvoda"> 
        <BsFillCameraFill></BsFillCameraFill>      Kamera: {product.kamera} MP 
        <br /><br /><MdMemory></MdMemory>  Memorija:   {product.memorija} GB
        <br /><br /> <FaWeightHanging></FaWeightHanging>  Tezina:  {product.tezina} g
        <br /><br /> <MdMobileScreenShare></MdMobileScreenShare>  Ekran:  {product.ekran}"
        <br /><br /> <BsBatteryFull></BsBatteryFull>  Baterija:  {product.baterija} mAh         
        <br /><br /><MdPriceChange></MdPriceChange>  Cena: {product.cena} RSD 
         </h6>
         <button className='btn' onClick={()=>dodajTelefon(product.id)} style={{background:"#adcaf7",marginLeft:"60%"}}> Uporedi <DiGitCompare></DiGitCompare></button>
        
    </div> 
</div>
  )
}

export default TelefonKartica