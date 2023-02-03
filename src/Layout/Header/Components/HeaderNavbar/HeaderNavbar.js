import React from 'react';
import HeaderNavbarItem from '../HeaderNavbarItem/HeaderNavbarItem';
import Button from '../../../../Components/Button/Button';
import './HeaderNavbar.css'
import {headerNavbarItems} from '../../../../ultil/const'


const HeaderNavbar = ({name, options}) => {
  return (
    <div className='header-navbar'>
      {headerNavbarItems && headerNavbarItems.map((item, key) => {
        return (
          <HeaderNavbarItem key={key} name={item.name} options={item.options}/>
        )
      })}
    </div>
  )
}

export default HeaderNavbar;