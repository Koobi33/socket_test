import React from 'react';
import helmetGreen from '../images/helmetGreen.svg';
import helmetRed from '../images/helmetRed.svg';
import glassesGreen from '../images/glassesGreen.svg';
import glassesRed from '../images/glassesRed.svg';
import hoomanGreen from '../images/hoomanGreen.svg';
import hoomanRed from '../images/hoomanRed.svg';
import '../App.css';
export default function (props) {

    return(
        <div>
            <h1>Сотрудники в помещении:</h1>
            <div className='Name-icon-container'>
                <p className='Name'>Дмитрий</p>
                <div>
                    <img alt='' src={helmetGreen} className='Menu_svg'/>
                    <img alt='' src={glassesGreen} className='Menu_svg'/>
                    <img alt='' src={hoomanGreen} className='Menu_svg'/>
                </div>
            </div>
        </div>
    );
}
