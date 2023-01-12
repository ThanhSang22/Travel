import React from 'react';
import './HeaderMenu.css';
import {IoCloseCircleOutline} from 'react-icons/io5';
import TextDecoration from '../../../../Components/TextDecoration/TextDecoration';
import {placeMenus} from '../../../../ultil/const'
import Place from '../../../../Components/Place/Place';
import Button from '../../../../Components/Button/Button';
import {FaMapMarkerAlt} from 'react-icons/fa';
import berlin from '../../../../assets/image/berlin.png'

const HeaderMenu = ({open, onClose}) => {
    if(!open) return <></>
    
  return (
    <div className='header-menu'>
      <div className='header-menu__close'>
        <IoCloseCircleOutline className='header-menu__close-icon' onClick={onClose} />
      </div>
      <div className='header-menu__grid'>
        <div className='header-menu__text'> 
          BEST
          <b className='header-menu__text-deco'>
            <TextDecoration name='packages' className='menu__text-deco' />
          </b>
        </div>
        <div className='header-menu__place'>
          {/* {placeMenus && placeMenus.map((placeMenu, key) => {
            return (
              <Place key={key}
              image={placeMenu.image} 
              name={placeMenu.name}
              location={placeMenu.location}
              />
            )
          })} */}
          <img src={berlin} className='place-img'/>
            <div className='place-content'>
                <div className='place-content__address'>berlin</div>
                <div className='place-content__map'><FaMapMarkerAlt/> europe</div>
                <Button name='FROM 700 $' className='palce-content__btn'/>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default HeaderMenu;