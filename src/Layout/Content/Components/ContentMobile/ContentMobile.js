import React from 'react';
import './ContentMobile.css';
import ContentMobileItem1 from '../ContentMobileItem/ContentMobileItem1';
import dataContentMobiles from '../../../../ultil/const'

const ContentMobile = () => {
    return (
        <div className='content-mobile'>
            {dataContentMobiles && dataContentMobiles.map((data, key) => {
                return (
                    <ContentMobileItem1 key={key} dataContentMobile={data} />
                )
            })}
        </div>
    )
}

export default ContentMobile