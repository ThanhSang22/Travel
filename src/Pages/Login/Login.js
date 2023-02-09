import React from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import './Login.css';
import Button from '../../Components/Button/Button';
import Register from '../Register/Register';
import {FaFacebook, FaTelegram} from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai'


const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm({mode: 'all'});
    const onSubmit = (data) => console.log(data);
    return (
        <div className='modal'>
            <div className='modal-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3  className='modal-body__header size-m'>login</h3>
                    <input {...register('email', {
                        required: 'Vui lòng nhập email.',
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: 'Email không hợp lệ.'
                        }
                    })} 
                    className='modal-body__input' 
                    type='email'
                    placeholder='Tên đăng nhập'
                    />
                    <p className='errors'>{errors.email?.message}</p>
                    <input {...register('password', {
                        required: 'Vui lòng nhập password.',
                        pattern: {
                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                            message: 'Mật khẩu không hợp lệ, nhập lại đi mầy'
                        }
                    })} className='modal-body__input' type='password' placeholder='Mật khẩu'/>
                    <p className='errors'>{errors.password?.message}</p>
                    <Button className='btn-body  btn-top' name='Đăng nhập' type='submit'/>
                </form>

                <p className='modal-body__text'>Quên mật khẩu?</p>
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