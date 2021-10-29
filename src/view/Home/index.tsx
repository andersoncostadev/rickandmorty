import React from "react";

import './style.scss';
import ImgHome from '../../assets/images/home.png';


const Home: React.FC = () => {
    return (
        <div>    
            <img 
            src={ImgHome}
            alt= 'Rick And Morty'
            className= 'image'
            />
        </div>
    )
}

export default Home;