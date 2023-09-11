import { useNavigate } from 'react-router-dom';
import './Searchitem.css';
import React from 'react'

export default function SearchItem(){
    /* using react routers so as to when the user clicks on see availability button 
    the router will take user to the hotelrooms page where the hotelroom details are present */
  
    const navigate=useNavigate();
    const handleClickAvailability=()=>{
        navigate("/hotels/123");
    }
    return(
        <div className="SearchItem">
        <img src="./images/room1.png" alt="" className='searchItemImg'/>
        <div className="searchItemDesc">
            <h1 className="searchItemTitle">Tower street apartments</h1>
        
        <span className="searchItemDistance">500m from center</span>
        <span className="searchItemTaxi">Free airport taxi</span>
        <span className="searchItemSubtitle">
            Studio Apartment with air conditioning.
        </span>
        <span className="searchItemFeatures">
            Entire studio : 1 bathroom : 1 queen size bed
        </span>
        <span className="searchItemCancel">Free cancellation</span>
        <span className="isCancel">
            You can cancel later, so lock in this great price today!
        </span>
        </div>
     

        <div className="searchItemDetails">
            <div className="searchItemRating">
                <span>Excellent</span>
                <button>8.9</button>

            </div>
            <div className="searchItemDetailText">
                <span className='searchItemPrice'>$123</span>
                <span className="searchItemTax">Includes taxes and fees</span>
                <button className='siButton' onClick={handleClickAvailability}>See availability</button>
            </div>
        </div>
   </div>
    )
}