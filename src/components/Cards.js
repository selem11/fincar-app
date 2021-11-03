import React from 'react';
import CardItem from './CardItem';

import './cards.css';

import img9 from '../assets/images/img-9.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import img8 from '../assets/images/img-8.jpg';
import { useFetchFincas } from '../hooks/useFetchFincas';

const Cards = () => {

    const fincas = useFetchFincas();
    console.log(fincas);


    return (
        <div className='cards'>
            <h1>Algunos de nuestros destinos FAMILIARES!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        {
                            fincas.map(finca => (
                                <CardItem key={ finca.id }
                                    src={ finca.portada }
                                    text={ finca.nombre }
                                    label='Centro Recreacional'
                                    path='/services'
                                    fincaData={ finca }
                                >
                                </CardItem>
                            ))
                        }
                        <CardItem
                            src={ img9 }
                            text='Las Margaritas, Tradición Sabor y Atención'
                            label='Centro Recreacional'
                            path='/services'
                            fincaData={ fincas[0] }
                        />
                        <CardItem
                            src={ img2 }
                            text='El Rancho del Coleador'
                            label='Centro Recreacional'
                            path='/services'
                            fincaData={ fincas[1] }
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={ img3 }
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={ img4 }
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={ img8 }
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};   

export default Cards;