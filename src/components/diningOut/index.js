import React from 'react'
import "./diningOut.css"
import Collection from '../common/collection'
import { FaSliders } from 'react-icons/fa6';
import { TbArrowsSort } from 'react-icons/tb';
import { diningOut } from '../../data/diningOut';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';



const collectionList = [
  {
    id:1,
    title:"Christmas Special Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    Places: "10 Places"
  },
  {
    id:2,
    title:"Newly Opened Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923143.png",
    Places: "9 Places"
  },
  {
    id:3,
    title:"Serene Rooftop Places",
    cover:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    Places: "10 Places"
  }
]


const diningFilters=[
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

const diningList=diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
        <Filters filterlist={diningFilters}/>
      </div>
      <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Bangalore"/>
    </div>
  )
}

export default DiningOut
