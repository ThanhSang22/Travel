import React from 'react';
import {Link} from 'react-router-dom'
import './Login.css';
import Button from '../../Components/Button/Button';
import Register from '../Register/Register';
import {FaFacebook, FaTelegram} from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai'


const Login = () => {
    return (
        <div className='modal'>
            <div className='modal-body'>
                <h3  className='modal-body__header size-m'>login</h3>
                <input className='modal-body__input' type='email' placeholder='Tên đăng nhập'/>
                <input className='modal-body__input' type='password' placeholder='Mật khẩu'/>
                <Link to='/'>
                    <Button className='btn-body' name='Đăng nhập'/>
                </Link>
                <p className='modal-body__text'>Quên mật khẩu</p>
                <p className='modal-body__header size-s'>Hoặc</p>
                <div className='modal-body__socials'>
                    <a href='' className='btn--icon'>
                        <FaFacebook className='btn--icon-icon'/>
                        facebook
                    </a>
                    <a href='#' className='btn--icon'><AiFillGoogleCircle className='btn--icon-icon'/>google </a>
                    <a href='#' className='btn--icon'><FaTelegram className='btn--icon-icon'/> telegram</a>
                </div>
                <div  className='modal-body__footer'>
                    <p className='modal-body__footer-text'>Bạn chưa có tài khoản??</p>
                    <Link to='/register' className='modal-body__footer-register'>
                        Register now!
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Login;