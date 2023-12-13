import React from 'react'
import "./delivery.css"
import Filters from '../common/filters'
import { FaSliders } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';
import { restaurants } from '../../data/restaurants';



const deliveryFilters=[
  {
    id:1,
    icon:<FaSliders className='fi fi-rr-settingisliders absolute-center'/>,
    title:"Filters"
  },
  {
    id:2,
    title:"Rating: 4.0+",
  },
  {
    id:3,
    title:"Safe and Hygienic",
  },
  {
    id:4,
    title:"Pure Veg",
  },
  {
    id:5,
    title:"Delivery Time",
    icon: <TbArrowsSort className='fi fi-rr-apps-sort absolute-center'/>
  },
  {
    id:6,
    title:"Great Offers",
  },
];

const restaurantList= restaurants;
const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
      <Filters filterlist={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection list={restaurantList} collectionName='Delivery Restaurants in Bangalore'/>
    </div>
  )
}

export default Delivery
