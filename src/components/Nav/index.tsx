import React from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

import './style.scss';
import LogoRick from "../../assets/images/rickandmorty.png"

const Nav: React.FC = () => {
    return(
        <motion.nav 
            animate={{x: [-800, 100, 0]}}
            className="nav-bar container"
        >
            <img src={LogoRick} alt="Logo Rick And Morty"/>
            <div className="links">
            <Link to='/'>Home</Link>    
            <Link to='/ram'>Cards</Link>  
            </div>
        </motion.nav>
    )
}

export default Nav;