import React from 'react'; 
import PropTypes from 'prop-types'; 

 function TinderCard(props) {
    return (
        <div className="TinderCard">
        <div className="TinderCard__avatar">
        <img src={props.person.imageURL}/>
        </div>
        <div className="TinderCard__name">
        {props.person.name}
        </div>
        </div>
        )
    }
    
    TinderCard.propTypes =  {
        person :  {
            name: PropTypes.string, 
            imageURL: PropTypes.string
        }
    }


    export default TinderCard;