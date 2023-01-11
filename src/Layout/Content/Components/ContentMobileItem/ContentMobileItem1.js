import React from 'react';
import './ContentMobileItem.css';
import Button from '../../../../Components/Button/Button';


const ContentMobileItem1 = ({image, icon, name, packages, destination}) => {
    return (
        <div className='content-monile-item'>
            <div class="item__photo">
                <img src={image} alt="photo-europe" class="item__photo-img"/>
                <div class="item__fill1">
                    <div class="item__icon">
                        <img src={icon} alt="europe-icon" class="item__icon-img"/>
                    </div>
                    <div class="item__info">
                        <h1 class="item__info-name">{name}</h1>
                        <span class="item__info-qly">{packages}</span>
                    </div>
                </div>
                <div class="item__fill2">
                    <h1 class="item-heading">packages</h1>
                    <ul class="item-list">
                        <li class="item-item">
                            <a href="" class="item-link">{destination}</a>
                        </li>
                        {/* <li class="item-item">
                            <a href="" class="item-link">{destination}</a>
                        </li>
                        <li class="item-item">
                            <a href="" class="item-link">{destination}</a>
                        </li> */}
                    </ul>
                    <a href="" class="item-view-btn">
                        <Button name='view destination' className='btn'/>
                    </a>
                </div>
            </div>
        </div>                    
    )
}

export default ContentMobileItem1;