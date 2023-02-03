import React from 'react';
import './ContentMobileItem.css';
import europe from '../../../../assets/image/europe.png';
import arch from '../../../../assets/image/arch.png';
import Button from '../../../../Components/Button/Button';


const ContentMobileItem = ({className}) => {
    return (
        <div className='content-monile-item'>
            <div class="item__photo">
                <img src={europe} alt="photo-europe" class={`item__photo-img ${className}`}/>
                <div class="item__fill1">
                    <div class="item__icon">
                        <img src={arch} alt="europe-icon" class="item__icon-img"/>
                    </div>
                    <div class="item__info">
                        <h1 class="item__info-name">Europe</h1>
                        <span class="item__info-qly">3 PACKAGES</span>
                    </div>
                </div>
                <div class="item__fill2">
                    <h1 class="item-heading">packages</h1>
                    <ul class="item-list">
                        <li class="item-item">
                            <a href="" class="item-link">berlin</a>
                        </li>
                        <li class="item-item">
                            <a href="" class="item-link">amsterdam</a>
                        </li>
                        <li class="item-item">
                            <a href="" class="item-link">tuscany</a>
                        </li>
                    </ul>
                    <a href="" class="item-view-btn">
                        <Button name={'VIEW DESTINATION'} className='btn'/>
                    </a>
                </div>
            </div>
        </div>                    
    )
}

export default ContentMobileItem