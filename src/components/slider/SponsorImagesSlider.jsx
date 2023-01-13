import React from 'react';
import PropTypes from 'prop-types';
import './sponsor-image-slider.scss';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation,Thumbs} from 'swiper';
const SponsorImagesSlider =props => {

  return (
    <div style={{color:"#fff"}}>
      <Swiper
      loop={true}
      spaceBetween={10}
      Navigation={true}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
      slidesPerView={5}
      className='sponsorImages'
      >
        {
            props.images?.map((item,index)=>(
                <SwiperSlide key={index}>
                    <img src={item} alt="Slider Image" />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}
SponsorImagesSlider.propTypes = {
    images:PropTypes.array.isRequired
}
export default SponsorImagesSlider
