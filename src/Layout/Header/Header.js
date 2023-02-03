import React, {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import {headerServices} from '../../ultil/const';
import {IoMdContact} from "react-icons/io";
import logo from '../../assets/image/logo.png';
import './Header.css';
import HeaderNavbar from './Components/HeaderNavbar/HeaderNavbar';
import menu from '../../assets/image/menu.png';
import HeaderMenu from './Components/HeaderMenu/HeaderMenu';
import TextDecoration from '../../Components/TextDecoration/TextDecoration';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

const Header = () => {
    const  [openModal, setOpenModal] = useState(false);
    
    return (
        <div className='slide-bar'>
            <div className='header-control'>
                <img src={logo} className="header-logo"/>
                <div className='header-navbar-menu'>
                    <HeaderNavbar />
                    <Link to='/login'>
                        <IoMdContact className='header-contract'/>
                    </Link>
                    <img src={menu} className='header-menu-btn' onClick={()=> setOpenModal(true)}/>
                </div>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>             
                </Routes>
            </div>
            {/* <HeaderMenu className="header-menu-content"/> */}
            <div className='slider'>
                <div className='header-search__column'>
                    <h1 className='heading'>
                        search your next 
                        <TextDecoration className='decoration-text' name='holiday'/>
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
            <HeaderMenu className="header-menu-content" open={openModal} onClose={()=>setOpenModal(false)}/>
        </div>
    )
}

export default Header;