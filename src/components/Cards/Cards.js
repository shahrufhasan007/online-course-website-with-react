import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Cards.css';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';

const Cards = () => {
    var courses =[
        {   
            "image": "https://i.postimg.cc/Gp8Qx24q/ARY1-A.jpg",
            "title": "React Js",
            "text": "This is the best course of all time",
            "price": 49.99
        
        },
        {   
            "image": "https://i.postimg.cc/MKp1YT4V/ARY1-B.png",
            "title": "Angular",
            "text": "This is the best course of all time",
            "price": 100.99
        
        },
        {   
            "image": "https://i.postimg.cc/Vv1WwWDV/ARY1-C.jpg",
            "title": "Java Mastering",
            "text": "This is the best course of all time",
            "price": 350.99
        
        },
        {   
            "image": "https://i.postimg.cc/KY65q2LF/ARY1-D.jpg",
            "title": "VUE Js",
            "text": "This is the best course of all time",
            "price": 15.99
        
        },
        {   
            "image": "https://i.postimg.cc/R0H7nDYY/ARY1-E.png",
            "title": "Node Js Expert",
            "text": "This is the best course of all time",
            "price": 55.99
        
        },
        {   
            "image": "https://i.postimg.cc/vH0tR990/ARY1-F.jpg",
            "title":"Express Js",
            "text": "This is the best course of all time",
            "price": 225.99
        
        },
        {   
            "image": "https://i.postimg.cc/tJXWwCg0/ARY1-G.png",
            "title": "MonGo Expert",
            "text": "This is the best course of all time",
            "price": 45.99
        
        },
        {   
            "image": "https://i.postimg.cc/KcNnLL9m/ARY1-H.png",
            "title": "Mastering HTML ",
            "text": "This is the best course of all time",
            "price": 5.99
        
        },
        {   
            "image": "https://i.postimg.cc/m2pCp4fq/ARY1-I.png",
            "title": "Mastering Css",
            "text": "This is the best course of all time",
            "price": 10.99
        
        },
        {   
            "image": "https://i.postimg.cc/KjJB2SK1/ARY1-J.png",
            "text": "This is the best course of all time",
            "title": "Bootstrap 5",
            "price": 25.99
        
        },
        {   
            "image": "https://i.postimg.cc/pTKJ36Yj/ARY1-K.jpg",
            "title": "Python Hero",
            "text": "This is the best course of all time",
            "price": 35.99
        
        },
        {   
            "image": "https://i.postimg.cc/RVSLbG33/ARY1-L.jpg",
            "title": "C Programming",
            "text": "This is the best course of all time",
            "price": 99.99
        
        },
        {   
            "image": "https://images.pexels.com/photos/20780/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=200",
            "title": "Java Mastario",
            "text": "This is the best course of all time",
            "price": 49.99
        
        },
    
    ];
    
    const showData = courses.slice(0,12);
    const[card,setCard] =useState(showData);
    const [cart, setCarts] = useState([]);

    const handleAddCourse = (card) => {
        const newCart = [...cart, card];
        setCarts(newCart);
    }
    return (
        <div className="container">
            <div className="card-container">  
                {
                    card.map( card => <Courses handleAddCourse={handleAddCourse} card={card}></Courses>)
                }
            </div>
            <div className="details-container">
                <h3>Courses Summery</h3>
                <hr/>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Cards;