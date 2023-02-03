import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../Components/Button/Button';
import {FaFacebook, FaTelegram} from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai'

const Register = () => {
    return (
        <div className='modal'>
            <div className='modal-body'>
                <h3  className='modal-body__header size-m'>register</h3>
                <input className='modal-body__input' type='email' placeholder='Email/ Số điện thoại'/>
                <input className='modal-body__input' type='password' placeholder='Mật khẩu'/>
                <input className='modal-body__input' type='password' placeholder='Nhập lại mật khẩu'/>
                <Link to='/login'>
                    <Button className='btn-body' name='Đăng ký'/>
                </Link>
                <p className='modal-body__header size-s'>Hoặc</p>
                <div className='modal-body__socials'>
                    <a href='' className='btn--icon'>
                        <FaFacebook className='btn--icon-icon'/>
                        facebook
                    </a>
                    <a href='#' className='btn--icon'><AiFillGoogleCircle className='btn--icon-icon'/>google </a>
                    <a href='#' className='btn--icon'><FaTelegram className='btn--icon-icon'/> telegram</a>
                </div>
            </div>
        </div>
    )
}

export default Register