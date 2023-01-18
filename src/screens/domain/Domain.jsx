import React,{useState,useEffect} from 'react'
import SliderContent from "../../components/slider/SliderContent";
import Arrows from "../../components/slider/Arrows";
import Dots from "../../components/slider/Dots";
import domainData,{data} from './dummy.js'
import OneCard from '../../components/domain/OneCard';
const leng = data.length - 1;
function Domain() {
    const [activeIndex, setActiveIndex] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex(activeIndex === leng ? 0 : activeIndex + 1);
        }, 3000);
        return () => clearInterval(interval);
      }, [activeIndex]);
  return (
    <div className='domainPage'>
        <div className="domainScreen">
            <div className="domainScroll">
            <div className="domainSlider">
            <SliderContent
              activeIndex={activeIndex}
              imageSlider={data}
            />
            <Arrows
              prevSlide={() => {
                setActiveIndex( activeIndex < 1 ? leng : activeIndex - 1)
              }}
              nextSlide={() =>{
                setActiveIndex( activeIndex===leng ? 0 : activeIndex + 1)
              }}
            />
            <Dots
              activeIndex={activeIndex}
              imageSlider={data}
              onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
            </div>
            <div className="domainHeading">
                <h2>DOMAINS</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, fghjukitoyujhgfdertygrhft fdgthdyufgb</p>
            </div>
            </div>
        </div>
      <div className="flex-container">
        {domainData?.map((item)=>(
            <OneCard pic={item.pic} title={item.title} des={item.des}/>
        ))}
      </div>
    </div>
  )
}

export default Domain
