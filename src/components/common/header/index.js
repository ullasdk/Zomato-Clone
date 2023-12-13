import React from 'react'
import "./header.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";





const Header = () => {
  return (
    <div className='max-width header'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
      alt="Zomato-logo"
      className='header-logo'
      />
      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <IoLocationOutline className='fi fi-rr-marker absolute-center location-icon'/>
              <div>Bangalore</div>
            </div>
            <FaCaretDown className='fi fi-rr-caret-down absolute-center'/>
          </div>
          <div className='location-search-seperator'></div>
          <div className='header-searchBar'>
          <IoSearchSharp className='fi fi-search absolute-center search-icon' />
          <input placeholder='Search for restaurant, cuisine or a dish' 
          className='search-input'/>
          </div>
        </div>
        <div className='profile-wrapper'>
          <img src='https://b.zmtcdn.com/data/user_profile_pictures/941/bbf8bdbf28ff9144472003b0296d2941.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A' alt='Profile'
          className='header-profile-image'/>
          <span className='header-username'>Ullas</span>
          <FaChevronDown  className='fi fi-angle-small-down absolute-center profile-options-icon '/>



        </div>
      </div>
    </div>
  )
}

export default Header
