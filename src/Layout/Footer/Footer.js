import React from 'react';
import './Footer.css';
import Button from '../../Components/Button/Button';
import {GrFormNext} from 'react-icons/gr';
import {GrYoutube} from 'react-icons/gr';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsPinterest} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__info'>
                <div className='footer__info--heading'>
                    <div className='footer__info--heading-text'>
                        <p className='content-heading__text'>keep in touch</p>
                        <h1 className='content-heading info--heading'>Travel with Us</h1>
                    </div>
                    <div className='footer__info--send'>
                        <input type='text' className='info--send-input'/>
                        <Button name='send' className='info--send-btn'/>
                    </div>
                </div>
                <div className='footer__info-text__backgroud'>
                    <div className='footer__info-text'>
                        <div className='info-text'>
                            <p className='info-text__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur ut diam et nibh <u>condimentum</u> venenatis eu ac magnasin. 
                                Quisque interdum est mauris, eget ullamcorper.
                            </p>
                            <div className='info-text__icon'>
                                <a href='#' className='info-text__icon-view'><AiOutlineTwitter/></a>
                                <a href='#' className='info-text__icon-view'><GrYoutube/></a>
                                <a href='#' className='info-text__icon-view'><FaFacebookF/></a>
                                <a href='#' className='info-text__icon-view'><BsPinterest/></a>
                            </div>
                        </div>
                        <div className='info-text__options-box'>
                            <div className='info-text__options'>
                                <h6 className='text__options-heading'>our agency</h6>
                                <ul className='text__options'>
                                    <li className='options--footer'> <GrFormNext/> Services</li>
                                    <li className='options--footer'><GrFormNext/> insurancee</li>
                                    <li className='options--footer'><GrFormNext/> agency</li>
                                    <li className='options--footer'><GrFormNext/> tourism</li>
                                    <li className='options--footer'><GrFormNext/> tourism</li>
                                </ul>
                            </div>
                            <div className='info-text__options'>
                                <h6 className='text__options-heading'>our agency</h6>
                                <ul className='text__options'>
                                    <li className='options--footer'> <GrFormNext/> Services</li>
                                    <li className='options--footer'><GrFormNext/> insurancee</li>
                                    <li className='options--footer'><GrFormNext/> agency</li>
                                    <li className='options--footer'><GrFormNext/> tourism</li>
                                    <li className='options--footer'><GrFormNext/> tourism</li>
                                </ul>
                            </div>
                            <div className='info-text__options'>
                                <h6 className='text__options-heading'>our agency</h6>
                                <ul className='text__options'>
                                    <li className='options--footer'> <GrFormNext/> Services</li>
                                    <li className='options--footer'><GrFormNext/> insurancee</li>
                                    <li className='options--footer'><GrFormNext/> agency</li>
                                    <li className='options--footer'><GrFormNext/> tourism</li>
                                    <li className='options--footer'><GrFormNext/> tourism</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__note'>
                    <div className='footer__note-text'>
                        <p className='note-text'>the best wordpres travel them</p>
                        <p className='note-text'>copyright nicdark themes 2018</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer