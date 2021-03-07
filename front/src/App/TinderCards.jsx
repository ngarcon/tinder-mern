import React, {useState} from 'react'; 
import {peopleData} from '../mock/people';

import "./TinderCards.css"; 


export function TinderCards() {

    const [people, setPeople] = useState(peopleData);


    return (
        <div className={"TinderCards"}>
            {people.map(person => {
                return (<TinderCard
                    people={person}
            
                />)
            })}
        </div>
    )
}

