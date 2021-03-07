import React from 'react'; 
import { Close, Star, Favorite, FlashOn, Replay } from '@material-ui/icons';
import {yellow, red, blue, green, purple} from '@material-ui/core/colors';
import './SwipeOptions.css';


function SwipeOptions() {
    
    const iconProps = {
        fontSize: 'large'
    };
    
    return (
        <div className="SwipeOptions">
            <div className="SwipeOptions__option">
                <Replay
                    {...iconProps}
                    style={{color:yellow[800]}}
                />
            </div>
            <div className="SwipeOptions__option">
                <Close 
                    {...iconProps}
                    style={{color:red[500]}}
                />
            </div>
            <div className="SwipeOptions__option">
                <Star 
                    {...iconProps}
                    style={{color:blue[400]}}
                />
            </div>
            <div className="SwipeOptions__option">
                <Favorite 
                    {...iconProps}
                    style={{color:green[500]}}
                /> 
            </div>
            <div className="SwipeOptions__option">
                <FlashOn 
                    {...iconProps}
                    style={{color:purple[300]}}
                />
            </div>
        </div>
        )
    }
    
    
    export {SwipeOptions};