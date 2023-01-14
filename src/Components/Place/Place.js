import React from 'react';
import './Place.css';
import {FaMapMarkerAlt} from 'react-icons/fa';
import Button from '../Button/Button';
import berlin from '../../assets/image/berlin.png'

const Place = ({img, place, locat, btn}) => {
    return (
        <div className='place-item'>
            <img src={img} className='place-img'/>
            <div className='place-content'>
                <div className='place-content__address'>{place}</div>
                <div className='place-content__map'><FaMapMarkerAlt/> {locat}</div>
                <Button name={btn} className='palce-content__btn'/>
            </div>
        </div>
    )
}

export default Place;