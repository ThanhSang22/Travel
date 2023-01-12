import React from 'react';
import './ContentPro.css';
import Button from '../../../../Components/Button/Button';
import {FaMapMarkerAlt} from 'react-icons/fa';

const ContentPro = ({datapakage}) => {
    return (
        <div className={`contentpro`}>
            <div className='content__packages' >
                <div className='content__packages-item'>
                    <div className='packages-item'>
                        <img src={datapakage.image} className='packages-item__img'/>
                        <div className='packages-item__icon berlin-color'>
                            <img src={datapakage.icon}  className='packages__icon'/>
                        </div>
                    </div>
                    <div className='packages-item__info'>
                        <h1 className='packages-item__place'>{datapakage.name}</h1>
                        <p className='packages-item__map'> <FaMapMarkerAlt/> {datapakage.location}</p>
                        <hr/>
                        <div className='packages-item__price'>
                            <div className='price--text'>
                                <h6 className='item__price--text'> curtural</h6>
                                <h6 className='item__price--text'>
                                    relax
                                    <Button name='+1' className='item__price-btn berlin-color'/>
                                </h6>
                            </div>
                            <span className='item__price' >{datapakage.price}</span>
                        </div>
                        <hr/>
                        <p className='packages-item__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.</p>
                        <a href='#' className='packages-item__view'>
                            <Button name='details' className='packages-item__btn berlin-color'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPro