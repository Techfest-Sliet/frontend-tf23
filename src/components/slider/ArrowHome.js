import React from 'react'

function ArrowPrev({prevSlide}) {
  return (
    <div className='arrows'>
      <span className='prevHome' onClick={prevSlide} style={{paddingRight:"30px"}}>
        &#10094;
      </span>
    </div>
  )
}
function ArrowNext({nextSlide}) {
    return (
      <div className='arrows'>
        <span className='nextHome' onClick={nextSlide} style={{paddingLeft:"30px"}}>
          &#10095;
        </span>
      </div>
    )
  }
export  {ArrowPrev, ArrowNext};
