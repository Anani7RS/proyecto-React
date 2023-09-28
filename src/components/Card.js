import React from 'react'
//import image1 from "../assets/pantera.jpeg"
import  PropTypes  from 'prop-types'
//import './card.css'

export default function Card({id, title, image, instructor}){
    return(
        <div className='card text-center bg-dark'>
            <div className='card-body text-light'>
                <img src={image} alt="" className='card-img-top'></img>
                <h4 className='card-title'> {title}</h4>
                <p className='card-text text-secondary'>
                    instructor: {instructor}
                </p>
                <a href='#!' className='btn btn-outline-secondary rounded-0'>
                    Ir al sitio web
                </a>
            </div>
        </div>
    )
}
