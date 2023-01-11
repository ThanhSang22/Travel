/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from '../../assets/image/logo.png';
import './Header.css';
import HeaderNavbar from './Components/HeaderNavbar/HeaderNavbar';
import menu from '../../assets/image/menu.png';
import HeaderMenu from './Components/HeaderMenu/HeaderMenu';
import TextDecoration from '../../Components/TextDecoration/TextDecoration';
import {FaSearch} from 'react-icons/fa';
import relax from '../../assets/image/t-relax.png';
import cultural from '../../assets/image/t-cultural.png';
import sport from '../../assets/image/t-sport.png';
import history from '../../assets/image/t-history.png';


const headerServices = [
    {
        icon: relax,
        name: 'relax',
    },
    {
        icon: cultural,
        name: 'cultural',
    },
    {
        icon: sport,
        name: 'sport',
    },
    {
        icon: history,
        name: 'history',
    },
]


const Header = () => {
    // const modals = []

    return (
        <div className='slide-bar'>
            <div className='header-control'>
                <img src={logo} className="header-logo"/>
                <div className='header-navbar-menu'>
                    <HeaderNavbar />
                    <img src={menu} className='header-menu-btn'/>
                </div>
            </div>
            {/* <HeaderMenu className="header-menu-content"/> */}
            <div className='slider'>
                <div className='header-search__column'>
                    <h1 className='heading'>
                        search your next 
                        <TextDecoration className='decoration-text' name={'Holiday'}/>
                    </h1>
                    <h6 className='headeing__text'>
                        CHECK OUR BEST PROMOTIONS
                    </h6>
                    <div className='header-search__icon'>
                        <input type='text' className='header-search__input' placeholder='Choose your Destination...'></input>
                        <button className='search-icon'> <FaSearch/> </button>
                    </div>
                </div>
                <div className='header-service'>
                    {headerServices && headerServices.map((headerService, index) => {
                        return (
                            <div className='services' key={index}>
                                <img className='services__icon' src={headerService.icon}/>
                                <div className='services__name'> {headerService.name} </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* <HeaderMenu className="header-menu-content"/> */}
        </div>
    )
}

export default Header;