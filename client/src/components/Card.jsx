import React from 'react';
import CardComponent from './CardComponent';
import './Card.css';

function Card() {
  return (
    <div className='cards'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className  = 'cards__container'>
            <div className = 'cards__wrapper'>
                <ul className = 'cards__item'>
                    <CardComponent
                        src='images/img-1.jpg'
                        text='Fasilitas yg kami sediakan'
                        label='Fasilitas'
                        path='/Fasilitas'
                    />
                    <CardComponent
                        src='images/img-2.jpg'
                        text='Fasilitas yg kami sediakan'
                        label='Fasilitas'
                        path='/Fasilitas'
                    />
                </ul>
                <br/>
                <ul className = 'cards__item'>
                    <CardComponent
                        src='images/img-1.jpg'
                        text='Fasilitas yg kami sediakan'
                        label='Fasilitas'
                        path='/Fasilitas'
                    />
                    <CardComponent
                        src='images/img-2.jpg'
                        text='Fasilitas yg kami sediakan'
                        label='Fasilitas'
                        path='/Fasilitas'
                    />
                    <CardComponent
                        src='images/img-2.jpg'
                        text='Fasilitas yg kami sediakan'
                        label='Fasilitas'
                        path='/Fasilitas'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card