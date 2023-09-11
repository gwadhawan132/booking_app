import React from 'react';
import './Home.css'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import FooterHome from '../../components/footerHome/FooterHome';



export default function Home(){
    return(
        <div className="home">
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">
            Browse by property type.
        </h1>
        <PropertyList/>
        <div className="homeTitle">
            <h1> Homes guests love</h1>
        </div>
        <FeaturedProperties/>
        <MailList/> 
        <FooterHome/>
       
        </div>

        </div>
    )
}