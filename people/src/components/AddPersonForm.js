import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addPerson} from '../redux/actions';

const AddPersonForm = (props) => {
    console.log("addpersonformprops:", props)
    const [input, setInput] = useState({name: "", age: "", favoriteFood: "", id: Date.now()})

    const handleChanges = e => {
        setInput({...input, [e.target.name] : e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addPerson(input);
        setInput({name: "", age: "", favoriteFood: ""})
    }

    return (
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'/>Name: 
                    <input onChange={handleChanges} name='name' type='text' placeholder='Name here...' value={input.name}/>
                </div>
                <div>
                    <label htmlFor='age'/>Age: 
                    <input onChange={handleChanges} name='age' type='text' placeholder='Age here...' value={input.age}/>
                </div>
                <div>
                    <label htmlFor='favoriteFood'/>Favorite Food: 
                    <input onChange={handleChanges} name='favoriteFood' type='text' placeholder='Favorite food here...' value={input.favoriteFood}/>
                </div>
                <button type='submit'>Add Person</button>
            </form>
    )
}

const mapStateToProps = state => {
    return {
        people: state.people,
        isAdding: state.isAdding,
        error: state.error
    }
}

export default connect(mapStateToProps, {addPerson})(AddPersonForm);
