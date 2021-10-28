import React from "react";
import {Link} from 'react-router-dom';

import './style.scss';


const Home: React.FC = () => {
    return (
        <div>
            <h1>
                <Link 
                to='/ram'
                className='link'
                >
                    Acessar Cards
                </Link>
            </h1>
            <img 
            src='https://www.gbposters.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/i/rick-and-morty-group-mini-poster-1.133.jpg' 
            alt= 'Rick And Morty'
            className= 'image'
            />
        </div>
    )
}

export default Home;