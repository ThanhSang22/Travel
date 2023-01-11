import React from 'react';
import './ContentMobile.css';
import ContentMobileItem from '../ContentMobileItem/ContentMobileItem';
import ContentMobileItem1 from '../ContentMobileItem/ContentMobileItem1';
import europe from '../../../../assets/image/europe.png';
import arch from '../../../../assets/image/arch.png';
import thailandia from '../../../../assets/image/thailan.png';
import buddha from '../../../../assets/image/buddha.png';
import italy from '../../../../assets/image/italy.png';
import torii from '../../../../assets/image/toriigate.png';
import netherlands from '../../../../assets/image/nettherlands.png';
import pisa from '../../../../assets/image/pisa.png';
import united from '../../../../assets/image/united-states.png';
import london from '../../../../assets/image/london.png';
import golden from '../../../../assets/image/golden.png';



const dataContentMobiles = [
    {
        image: europe,
        icon: arch,
        name: 'europe',
        package: '3 packages',
        destination: ['berlin', 'amsterdam', 'Tuscany']
    },
    {
        image: thailandia,
        icon: buddha,
        name: 'thailandia',
        package: '1 packages',
        destination: ['phuket']
    },
    {
        image: europe,
        icon: torii,
        name: 'europe',
        package: '2 packages',
        destination: ['hongkong', 'phuket']
    },
    {
        image: italy,
        icon: pisa,
        name: 'italy',
        package: '1 packages',
        destination: ['Tuscany']
    },
    {
        image: netherlands,
        icon: london,
        name: 'netherlands',
        package: '1 packages',
        destination: ['amsterdam']
    },
    {
        image: united,
        icon: golden,
        name: 'united States',
        package: '3 packages',
        destination: ['berlin', 'amsterdam', 'tuscany']
    }

]

const ContentMobile = () => {
    return (
        <div className='content-mobile'>
            {dataContentMobiles && dataContentMobiles.map((data, index) => {
                return (
                    <ContentMobileItem1 key={index} image={data.image} icon={data.icon} name={data.name} packages={data.package} destination={data.destination} />
                )
            })}
        </div>
    )
}

export default ContentMobile