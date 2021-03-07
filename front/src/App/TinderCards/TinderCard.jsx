import React from 'react'; 
import PropTypes from 'prop-types';
import Card from 'react-tinder-card';

import './TinderCard.css'; 

 function TinderCard(props) {


    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
       
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

    return (
        <Card 
        onSwipe={onSwipe} 
        onCardLeftScreen={() => onCardLeftScreen(props.person.name)} 
        preventSwipe={['up', 'down']}
        
        >
            <div className="TinderCard">
                <div className="TinderCard__avatar" style ={
                    {
                        backgroundImage: `url(${props.person.imageURL})`,
                        zIndex: props.person.index
                    }
                }>
                </div>
                <div className="TinderCard__name">
                    {props.person.name}
                </div>
            </div>
        </Card>
        )
    }
    
    TinderCard.propTypes =  {
        person :  {
            name: PropTypes.string, 
            imageURL: PropTypes.string,
            index : PropTypes.number
        }
    }


    export {TinderCard};