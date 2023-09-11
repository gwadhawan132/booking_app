import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './List.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';



export default function List(){
    const location=useLocation();
    const[destination,setDestination]=useState(location.state.destination);
    const[date,setDate]=useState(location.state.date);
    const[openDate,setOpenDate]=useState(false);
    const[options,setOptions]=useState(location.state.options);

    console.log(location);

    return(
        <div className="list">
        <Navbar/>
        <Header type="list"/> {/* list is given as a prop so as to remove the header search section in other pages except the home page */}
        

        <div className="listContainer">
            <div className="listWrapper">
            <div className="listSearch"><h1 className="listSearchTitle">Search</h1>
           
            <div className="listSearchItem">
                <label>Destination</label>
                <input type="text" placeholder={destination} />
            </div>

            <div className="listSearchItem">
                <label>Check-in Date </label>
                <span onClick={()=>setOpenDate(!openDate)}>
                    {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                </span>
             { openDate &&  <DateRange
                    onChange={item=>setDestination([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                    className='date'
                />}
            </div>

                <div className="listSearchItem">
                    <label>Options</label>
                    <div className="listOptions">
                    <div className="listSearchOptionItem">
                        <span className="listOptionSearchText">Per night</span>
                        <input type="number" className='listSearchOptionInput' />
                    </div>
                    <div className="listSearchOptionItem">
                        <span className="listOptionSearchText">Max price</span>
                        <input type="number" className='listSearchOptionInput' />
                    </div>
                    <div className="listSearchOptionItem">
                        <span className="listOptionSearchText">Min price</span>
                        <input type="number" className='listSearchOptionInput'/>
                    </div>
                    <div className="listSearchOptionItem">
                        <span className="listOptionSearchText">Adult</span>
                        <input type="number" className='listSearchOptionInput' min={1} placeholder={options.adult}/>
                    </div>
                    <div className="listSearchOptionItem">
                        <span className="listOptionSearchText">Children</span>
                        <input type="number" className='listSearchOptionInput' min={0} placeholder={options.children}/>
                    </div>
               
                </div>
            </div>
            <button>Search</button>
            </div>
            
            <div className="listResult">
               
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
           
            </div>
            </div>
        </div>
        </div>
    )
}