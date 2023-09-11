import React, { useState } from 'react'
import './Hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleArrowUp, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Hotel(){
  const[slideNumber,setSlideNumber]=useState(0);
  const[open,setOpen]=useState(false);

  const handleOpen=(idx)=>{
    setSlideNumber(idx);
    setOpen(true)
  }

  //function to change the images with left and right arrow.
  //if the idx of image displayed is 0 and  left arrow is clicked then it will return the idx 5 of image array.
  //if the idx of the image displayed currently is 5(last) and right arrow is clicked by the user then it will return the 0(first idx) of image arrays.
  const handleMove=(direction)=>{
        let newSlideNumber;

        if(direction==="left"){
          newSlideNumber=slideNumber===0?5:slideNumber-1
        }else{
          newSlideNumber= slideNumber===5?0:slideNumber+1
        }

        setSlideNumber(newSlideNumber);
  }



    const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ];
    return(
        <div>
            <Navbar/>
            <Header type="list"/>

            <div className="hotelContainer">
          { open &&  <div className="slider">

            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='leftarrow'  onClick={()=>{handleMove("left")}}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='rightarrow' onClick={()=>{handleMove("right")}}/>


            </div>}
            <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book now</button>
                <h1 className="hotelTitle">Premium Hotel</h1>
                <div className="hotelAddress">

                    <FontAwesomeIcon icon={faLocationDot}/>
                    <span>Elton st 124 New York</span>
                </div>
                <span className="hotelDistance">
                    500m from center with all amenities.
                </span>
                <span className="hotelPriceHighlight">
                    Book a stay over $114 at this property and get a free airport taxi
                </span>
                <div className="hotelImages">
                 {  photos.map((photo,idx)=>(
                    <div className="hotelImageWrapper">
                        <img  onClick={()=>handleOpen(idx)}src={photo.src} alt="" className='hotelImg' />
                    </div>
                   )) }
                </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailTexts">
                            <h1 className="hotelTitle">
                                Stay in the heart of krakow
                            </h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aliquid cumque quisquam laborum id ex eum, dolores hic neque illum facilis voluptates incidunt voluptatem aperiam! Doloremque alias modi reiciendis reprehenderit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur expedita sapiente non. Repellendus sapiente ipsa quae repudiandae laudantium, rerum commodi qui laborum, sit quis placeat vitae ab mollitia dolorem.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro aliquam veritatis libero quaerat voluptate at est itaque aperiam! Dicta amet quo a debitis quasi eum consequatur ratione explicabo! Commodi!
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of krakow, this property has an excellent location score of 9.8
                            </span>
                            <h2>
                            <b>$945</b>
                            </h2>
                            <button>Reserve or Book now</button>
                 </div>
              </div>
            </div>
          </div>
            <MailList/>
            <Footer/>
        </div>

        )
}