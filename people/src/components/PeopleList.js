import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../redux/actions'; 
import Person from './Person';

const PeopleList = (props) => {
console.log({props})
useEffect(() => {
    props.fetchPeople();
}, [])

    if(props.isFetching){
        return <h2>Fetching data...</h2>
    } else {
        if(props.isAdding){
            return <h2>New Person being added! </h2>
        }
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.people.map(person => {
                return (
                    <Person key={person.id}
                           name ={person.name}
                           age={person.age}
                           favoriteFood={person.favoriteFood}/> 
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        people: state.people,
        isFetching: state.isFetching,
        error: state.error,
        isAdding: state.isAdding
    }
}

export default connect(mapStateToProps, {fetchPeople})(PeopleList);
