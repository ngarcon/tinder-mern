import React from 'react'; 
import {Person, Whatshot, Forum} from '@material-ui/icons';
import './Header.css'; 

export function Header() {
    
    const iconProps = {
        style: {
            fontsize: 45
        }
    }; 
    
    return (
        <div className="header">
        <div className="header__icon">
        {/* user icon */}
        <Person {...iconProps}/>
        </div>
        <div className="header__icon">
        {/* tinder icon*/}
        <Whatshot {...iconProps} style={{color: "red"}}/>
        </div>
        <div className="header__icon">
        {/* chat icon*/}
        <Forum {...iconProps}/>
        </div>
        </div>
        );
    }
    
    