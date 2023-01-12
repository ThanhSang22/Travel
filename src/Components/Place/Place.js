import React from 'react';
import './Place.css';
import {FaMapMarkerAlt} from 'react-icons/fa';
import Button from '../Button/Button';

const Place = ({image, name, location}) => {
    return (
        <div className='place-item'>
            <img src={image} className='place-img'/>
            <div className='place-content'>
                <div className='place-content__address'>{name}</div>
                <div className='place-content__map'><FaMapMarkerAlt/> {location}</div>
                <Button name='FROM 700 $' className='palce-content__btn'/>
            </div>
        </div>
    )
}

export default Place;