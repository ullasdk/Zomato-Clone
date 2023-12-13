import React from 'react'
import './deliveryCollections.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem';

const deliveryItems=[
    {
        id:1,
        title:"pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        
    },
    {
        id:2,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        
    },
    {
        id:3,
        title:"Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        
    },
    {
        id:4,
        title:"Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
        
    },
    {
        id:5,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        
    },
    {
        id:6,
        title:"Chaat",
        cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
        
    },
    {
        id:7,
        title:"Momos",
        cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/330px-Momo_nepal.jpg",
        
    },
    {
        id:8,
        title:"Panner",
        cover:"https://www.funfoodfrolic.com/wp-content/uploads/2022/08/Paneer-Curry-1.jpg",
        
    },
    {
        id:9,
        title:"Samosa",
        cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Samosa-Indian-popular-snack.jpg/420px-Samosa-Indian-popular-snack.jpg",
        
    },
    {
        id:10,
        title:"Paratha",
        cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
        
    },
    {
        id:11,
        title:"Pastry",
        cover:"https://b.zmtcdn.com/data/dish_photos/b6d/2180b9d83f3b556e0417be2f449f4b6d.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
        
    },
    
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };


const DeliveryCollections = () => {
  return (
    <div className='delivery-collections'>
        <div className='max-width'>
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                    return <DeliveryItem item={item}/>;
                })}
            </Slider>


        </div>

    </div>
  )
}

export default DeliveryCollections
