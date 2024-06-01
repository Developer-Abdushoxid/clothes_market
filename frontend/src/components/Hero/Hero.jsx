import React from 'react'
import Slider from "react-slick";
import Image1 from '../../assets/hero/headphone.png'
import Image2 from '../../assets/category/vr.png'
import Image3 from '../../assets/category/macbook.png'

const HeroData =[
    {
        id:1,
        img: Image1,
        subtitle: 'Beats Solo',
        title: 'Wireless',
        title2: 'HeadPhone',
       
    },
    {
        id:2,
        img: Image2,
        subtitle: 'Beats Solo',
        title: 'Wireless',
        title2: 'Virtuals',
    
    },
    {
        id:3,
        img: Image3,
        subtitle: 'Beats Solo',
        title: 'Branded',
        title2: 'Laptops',
    
    },
]

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEease: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };
  return (
    <div>
        <div className=''>
            {/* hero section */}
            <Slider {... settings}> </Slider>
        </div>
    </div>
  )
}

export default Hero