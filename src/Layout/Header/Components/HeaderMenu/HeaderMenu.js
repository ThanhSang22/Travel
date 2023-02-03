import React from 'react';
import './HeaderMenu.css';
import {IoCloseCircleOutline} from 'react-icons/io5';
import TextDecoration from '../../../../Components/TextDecoration/TextDecoration';
import {menutes, placeMenus} from '../../../../ultil/const'
import Place from '../../../../Components/Place/Place';
import ContentMobileItem from '../../../Content/Components/ContentMobileItem/ContentMobileItem';

const HeaderMenu = ({open, onClose}) => {
    if(!open) return <></>
    
  return (
    <div className='header-menu header-menu__slide'>
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
          {placeMenus && placeMenus.map((placeMenu, p) => {
            return (
              <Place key={p}
              img={placeMenu.img} 
              place={placeMenu.place}
              locat={placeMenu.locat}
              btn={placeMenu.btn}
              />
            )
          })}
        </div>  
        <ContentMobileItem className='menu-item'/>
        <div className='header-menu__place'>
          {menutes && menutes.map((menute, m) => {
            return (
              <Place key={m}
              img={menute.imgm} 
              place={menute.placem}
              locat={menute.locatm}
              btn={menute.btnm}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu;