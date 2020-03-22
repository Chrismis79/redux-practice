import React from 'react';

const Person = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <ul>
                 <li>Age: {props.age}</li>
                 <li>Favorite Food: {props.favoriteFood}</li>
            </ul>
        </div>
    )
}

export default Person;