import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Courses.css';
const Courses = (props) => {
    const {image, title, text, price} =props.card;
    return (
        <div className="courses">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="courses-details">
                <h4>{title}</h4>
                <p className="courses-text">{text}</p>
                <h3 className="courses-price">Price : $ {price}</h3>
                <button 
                className="btn btn-info"
                onClick={()=> props.handleAddCourse(props.card)}
                ><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
            </div>
        </div>
    );
};

export default Courses;