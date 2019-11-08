import React from 'react';
const Smurf = props => {
    return (
        <div>
            <h3>{props.name}</h3>
            <ul>Stats:
                <li>Age: {props.age}y/o</li>
                <li>Height: {props.height}</li>
            </ul>
        </div>
    )
}
export default Smurf;