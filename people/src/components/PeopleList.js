import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../redux/actions'; 
import Person from './Person';

const PeopleList = props => {

const {propsPeople} = props.people;

useEffect(() => {
    props.fetchPeople();
}, [propsPeople])

    if(props.isFetching){
        return <h2><span role="img" aria-labelledby='jsx-ally/accessible-emoji'>🔃</span></h2>
    } else {
        if(props.isAdding){
            return <h2>New Person being added! </h2>
        }
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.people.map(person => {
                console.log("person in Peoplelist:", person)
                return (
                    <Person key={person.id}
                           name ={person.name}
                           age={person.age}
                           favoriteFood={person.favoriteFood}
                           id={person.id}/> 
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
