import React from 'react'
import './ContentHoliday.css'
import Button from '../../../../Components/Button/Button'
import TextDecoration from '../../../../Components/TextDecoration/TextDecoration'

const ContentHoliday = () => {
    return (
        <div className='content-holiday'>
            <div className='holiday-box'>
                <div className='holiday-text'>
                    <h1 className='holiday-text__frist'> Your</h1>
                    <h6 className='holiday-text__second'>Next
                    <TextDecoration name={'Holiday'} className='holiday'/>
                    </h6>
                </div>
                <Button name={'view all packages'} className='holiday-btn'/>
            </div>
        </div>
    )
}

export default ContentHoliday