import React from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import './Register.css'
import Button from '../../Components/Button/Button';
import {FaFacebook, FaTelegram} from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai'

const Register = () => {
    const {register, handleSubmit, formState: { errors }} = useForm({mode: 'all'});

    return (
        <div className='modal'>
            <div className='modal-body'>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <h3  className='modal-body__header size-m'>register</h3>
                    <input {...register('name', {
                        required: 'Vui lòng nhập tên đăng nhập.',
                        minLength: {
                            value: 3,
                            message: 'Tên đăng nhập phải lớn hơn 3 kí tự!'
                        },
                        maxLength: {
                            value: 30,
                            message: 'Tên đăng nhập phải nhỏ hơn 30 kí tự!'
                        }
                    })} className='modal-body__input' type='name' placeholder='Tên đăng nhập'/>
                    <p className='errors'>{errors.name?.message}</p>
                    <input {...register('email', {
                        required: 'Vui lòng nhập email.',
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: 'Email không hợp lệ!'
                        }
                    })} className='modal-body__input' type='email' placeholder='Email/ Số điện thoại'/>
                    <p className='errors'>{errors.email?.message}</p>
                    <input {...register('password', {
                        required: 'Vui lòng nhập password.',
                        pattern: {
                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                            message: 'Mật khẩu phải lớn hơn 6 kí tự, một chữ cái viết hoa, chữ viết thường, một số và một kí tự đặc biệt.'
                        }
                    })} className='modal-body__input' type='password' placeholder='Mật khẩu'/>
                    <p className='errors'>{errors.password?.message}</p>
                    {/* <input {...register('confirm_password', {
                        required: 'Vui lòng nhập lại password.',
                        pattern: {
                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            message: 'Mật khẩu không khớp.'
                        }
                    })} className='modal-body__input' type='password' placeholder='Nhập lại mật khẩu'/>
                    <p id='message' className='errors' >{errors.confirm_password?.message}
                        { (password !==  confirm_password) &&
                            errors.confirm_password?.message
                        }
                    </p> */}
                    <Button className='btn-body btn-top' name='Đăng ký' type='submit'/>
                </form>
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