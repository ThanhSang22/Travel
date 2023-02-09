import React from 'react';
import './Content.css';
import TextDecoration from '../../Components/TextDecoration/TextDecoration';
import ContentMobile from './Components/ContentMobile/ContentMobile';
import ContentHoliday from './Components/ContentHoliday/ContentHoliday';
import Button from '../../Components/Button/Button';
import world from '../../assets/image/world.png';
import Cruises from '../../assets/image/Cruises.png';
import landmark from '../../assets/image/landmark.png';
import ContentPro from './Components/ContentPro/ContentPro';
import {cleanders} from '../../ultil/const';
import { datapakages } from '../../ultil/const';

const Content = () => {
    return (
        <div className='content'>
            <b className='content-heading__text'>our proposals</b>
            <h1 className='content-heading'>
                our 
                <TextDecoration className='content-heading-line' name='destinations'/>
            </h1>
            <div className='content-mobile'>
                <ContentMobile/>
            </div>
            <ContentHoliday/>
            <div className='content-container'>
                <div className='container-box'>
                    <div className='container-box-text' >
                        <p className='content-heading__text'>north america</p>
                        <h1 className='content-heading'>the Best 
                            <TextDecoration name='Beaches' className='holiday__text'/>
                        </h1>
                        <p className='content-text'>Lorem ipsum dolor sit amet, consectetur adip iscing elit. 
                        Proin rhoncus urna dictum neque molestie ultricies mauris ac.</p>
                        <p className='content-text'>Lorem ipsum dolor sit amet, consectetur adip iscing elit. 
                        Prsoin rhoncus urna dictum neque molestie ultricies mauris ac.</p>
                        <h1 className='container__price'>
                            <span className='container__price-initial'>800</span>
                            500 $
                            <span className='container__price-for'>/ for persson</span>
                        </h1>
                        <Button name='book now' className="container-btn"/>
                    </div>
                    <div className='container-box-img'>
                        <div className='container'>
                            {cleanders && cleanders.map((num, index) => {
                                return (
                                    <ul className='box-cleander-time' key={index}>
                                        <li className='box-time'>
                                            <h1 className='box-time-number'>{num.number}00</h1>
                                            <h6 className='box-time-text'>{num.text}</h6>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='content__tour'>
                <div className='tour'>
                    <img src={world} className='tour__img'></img>
                    <div className='tour__info'>
                        <div className='tour__heading'>World Tour</div>
                        <div className='content-text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</div>
                        <a href='#' className='content__view--link'>View More</a>
                    </div>
                </div>
                <div className='tour'>
                    <img src={Cruises} className='tour__img'></img>
                    <div className='tour__info'>
                        <div className='tour__heading'>Cruises</div>
                        <div className='content-text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</div>
                        <a href='#' className='content__view--link'>View More</a>
                    </div>
                </div>
                <div className='tour'>
                    <img src={landmark} className='tour__img'></img>
                    <div className='tour__info'>
                        <div className='tour__heading'>Best Tours</div>
                        <div className='content-text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</div>
                        <a href='#' className='content__view--link'>View More</a>
                    </div>
                </div>
            </div>
            <div className='content__discover'>
                <div className='content__discover-item'>
                    <p className='discover-item__number'>01. last minutes</p>
                    <div className='discover-item__name'>Descover Cities</div>
                    <a href='#' className='discover-item__view'>
                        <Button name='deteails' className='discover-item__btn'/>
                    </a>
                </div>
                <div className='content__discover-item1'>
                    <p className='discover-item__number'>02. last minutes</p>
                    <div className='discover-item__name'>Descover Cities</div>
                    <a href='#' className='discover-item__view'>
                        <Button name={'deteails'} className='discover-item__btn'/>
                    </a>
                </div>
            </div>
            <div className='content__pro'>
                <div className='content-heading__text'>promotions</div>
                <h1 className='content-heading'>our 
                    <TextDecoration name='packages' className='content__pro-text'/>
                </h1>
                <div className='content__pro-backage'>
                    {datapakages && datapakages.map((pakage, p) => {
                        return (
                            <div className='pro-backage'>
                                <ContentPro key={p} datapakage={pakage} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Content;