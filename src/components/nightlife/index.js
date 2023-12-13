import React from 'react'
import "./nightlife.css"
import { FaSliders } from 'react-icons/fa6'
import Collection from '../common/collection'
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'
import { nightLife } from '../../data/nightlife'


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
const nightFilters=[
  {
    id:1,
    icon:<FaSliders/>,
    title:"Filters"

  },
  {
    id:1,
    
    title:"Pubs and Bars"

  },
  {
    id:1,
    
    title:"Rating:4.0"

  },

]


const nightList=nightLife
const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
        <Filters filterlist={nightFilters}/>
      </div>
      <ExploreSection list={nightList} collectionName='Nightlife Restaurants in bangalore'/>

    </div>
  )
}

export default Nightlife
