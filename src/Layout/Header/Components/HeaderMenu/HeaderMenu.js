import React from 'react';
import './HeaderMenu.css';
import {IoCloseCircleOutline} from 'react-icons/io5';
import TextDecoration from '../../../../Components/TextDecoration/TextDecoration';
import {FaMapMarkerAlt} from 'react-icons/fa';
import berlin from '../../../../assets/image/berlin.png'
import Button from '../../../../Components/Button/Button';

const HeaderMenu = () => {
  return (
    <div className='header-menu'>
      <div className='header-menu__close'>
        <IoCloseCircleOutline className='header-menu__close-icon'/>
      </div>
      <div className='header-menu__grid'>
        <div className='header-menu__text'> 
          BEST
          <b className='header-menu__text-deco'><TextDecoration name={'packages'} className={'header-menu__text-deco'}/></b>
        </div>
        <div className='header-menu__place'>
          <img src={berlin} className='place-img'/>
          <div className='place-content'>
            <div className='place-content__address'>Berlin</div>
            <div className='place-content__map'>{FaMapMarkerAlt} Europe</div>
            <Button name={'FROM 700 $'} className={'palce-content__btn'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu;