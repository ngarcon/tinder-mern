import React, {useState} from 'react'; 
import {peopleData} from '../mock/people';
import {TinderCard} from './TinderCards/TinderCard'; 
import "./TinderCards.css"; 


export function TinderCards() {

    const [people, setPeople] = useState(peopleData);


    return (
        <div className={"TinderCards"}>
            <div className={"TinderCards__visionner"}>
                {people.reverse().map((person, index) => {
                    return (<TinderCard
                        person={{
                            ...person,
                            index
                        }}
                
                    />)
                })}
            </div>
        </div>
    )
}

