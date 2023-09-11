import React from 'react'
import './Header.css'
import {FontAwesomeIcon} from  "@fortawesome/react-fontawesome";
import {faBed,faPlane,faCar,faTaxi,faCalendarDays,faPerson} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";
  

export default function Header({type}){
    const[destination,setDestination]=useState("");
    const[openDate,setOpenDate]=useState(false);
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);


  const[openOptions,setOpenOptions]=useState(false);
  const[options,setOptions]=useState({
    adult:1,
    children:0,
    room:1,
  });

  const handleClick=(name,operation)=>{
        setOptions(prev=>{return {
            ...prev,
            [name]:operation==='i'?options[name]+1:options[name]-1,
        };
    })
  }
  /* using react routers so as to when the user has selected dates and rooms/persons 
  and click on search button the router will take user to the list page where the hotels list is present and user's entered 
  dates will be displayed on search section left side of the list page */
  
  const navigate=useNavigate();
  
  const handleSearch=()=>{
        navigate("/hotels",{state:{destination,date,options}})
  }
  

    return(
        <div className="header"> 
        <div className={type==="list"?"headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxis</span>
                </div>
            </div>
            { type !=="list" &&
                <>
                
                <h1 className="headerTitle">A lifetime of discounts? it's genius.</h1>
            <p className="headerDesc">
                Get rewared or your travels -unlock instant savings of 10% with a free GoTravel account
            </p>
           <button className="headerBtn">
            SignIn / Register
            </button>
             {/*search section of the home page */}
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} clasName='headerIcon'/>
                <input 
                type="text" 
                placeholder='Where are you going?'
                 className='headerSearchInput'
                    onChange={e=>setDestination(e.target.value)}
                 />
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} clasName='headerIcon'/>
                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>{/* to display the selected dates form start to end on the header selection section . date is an array declared above using use state hook */}
               
               
                {/* the date selection calender ...it is imported from npm site search for react-date-range */}
                {/* when openDate is true only then both the statement will become true and show the date selection  calender*/}
                {openDate && <DateRange  
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='dateSelector'
                    /> }


                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} clasName='headerIcon'/>
                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult : ${options.children} children : ${options.room} rooms`}</span>
                    {   openOptions && <div className="options">
                    {/* adults */}
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCount">
                            <button className="optionCounterButton" onClick={()=>handleClick("adult","i")}>+</button>
                            <span>{options.adult}</span>
                            <button disabled={options.adult<=1} className='optionCounterButton' onClick={()=>handleClick("adult","d")}>-</button>
                            </div>
                        </div>
                        {/* children */}
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCount">
                            <button className="optionCounterButton" onClick={()=>handleClick("children","i")}>+</button>
                            <span>{options.children}</span>
                            <button disabled={options.children<=0} className='optionCounterButton' onClick={()=>handleClick("children","d")}>-</button>
                            </div>
                        </div>
                        {/*Rooms */}
                        <div className="optionItem">
                            <span className="optionText">Rooms</span>
                            <div className="optionCount">
                            <button className="optionCounterButton" onClick={()=>handleClick("room","i")}>+</button>
                            <span>{options.room}</span>
                            <button disabled={options.room<=1} className='optionCounterButton' onClick={()=>handleClick("room","d")}>-</button>
                            </div>
                        </div>

                    </div>}
                </div>
                <div className="headerSearchItem">
                <button className='headerBtn' onClick={handleSearch}>Search</button>
                </div>
                
            </div>
            </>
            }
            </div>
        </div>
    )
}