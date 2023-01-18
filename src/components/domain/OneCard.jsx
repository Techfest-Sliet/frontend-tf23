import React from 'react';
import './OneCard.css';
function OneCard({title,pic,des}) {
  return (
    <div class="flex-item">
   <div className="domainRing">
   <div class="outerring ">
        <div class="innerring ">
           <div class="flip-card-back">
               <p>{des}</p>
             </div> 

           <div class="flip-card-front">
               <img className='ringImage' src={pic} alt=""/>
           <p>{title}</p>
           </div>
        </div>
       </div>
   </div>
</div>
  )
}

export default OneCard