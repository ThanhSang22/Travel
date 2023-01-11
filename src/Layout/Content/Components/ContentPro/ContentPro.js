import React from 'react';
import './ContentPro.css';
import TextDecoration from '../../../../Components/TextDecoration/TextDecoration';
import Button from '../../../../Components/Button/Button';
import berlin from '../../../../assets/image/berlin.png';
import arch from '../../../../assets/image/arch.png';
import hongkong from '../../../../assets/image/hongkong.png';
import buddha from '../../../../assets/image/buddha.png';
import sanfrancisco from '../../../../assets/image/sanfrancisco.png';
import golden from '../../../../assets/image/golden.png';
import {FaMapMarkerAlt} from 'react-icons/fa';

const datapakages = [
    {
        image: berlin, 
        icon: arch, 
        name: 'berlin', 
        location: 'europe', 
        price: `700 $`, 
        desc: '',
    },
    {
        image: hongkong, 
        icon: buddha, 
        name: 'hong Kong', 
        location: 'asia', 
        price: `500 $`, 
        desc: '',
    },
    {
        image: sanfrancisco, 
        icon: golden, 
        name: 'san francisco', 
        location: 'united states', 
        price: `400 $`, 
        desc: '',
    }
]


const ContentPro = () => {
    return (
        <div className='contentpro'>
            {datapakages && datapakages.map((datapakage, index) => {
                return (
                    <div className='content__packages' >
                        <div className='content__packages-item' key={index}>
                            <div className='packages-item'>
                                <img src={datapakage.image} classname='packages-item__img'/>
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
                )
            })}
        </div>
    )
}

export default ContentPro