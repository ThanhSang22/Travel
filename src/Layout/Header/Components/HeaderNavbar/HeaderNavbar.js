import React from 'react';
import HeaderNavbarItem from '../HeaderNavbarItem/HeaderNavbarItem';
import Button from '../../../../Components/Button/Button';
import './HeaderNavbar.css'

const headerNavbarItems = [
  {
    name: 'home',
    options: null,
  },
  {
    name: 'packages',
    options:['search 1', 'search 2', 'tour packages', 'destination', 'typology'],
  },
  {
    name: 'shop',
    options: ['arachive', 'single product', 'cart', 'check out'],
  },
  {
    name: 'about us',
    options:['about us 1', 'about us 2', 'about us 3', 'about us 4', 'about us 5'],
  },
  {
    name: 'pages',
    options:['search 1', 'search 2', 'tour packages', 'destination', 'typology'],
  },
  {
    name: 'news',
    options:['search 1', 'search 2', 'tour packages', 'destination', 'typology'],
  },
  {
    name: 'contract',
    options:['search 1', 'search 2', 'tour packages', 'destination', 'typology'],
  },
  {
    name: <Button name={'book now'}/>,
    options: null,
  }
]

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