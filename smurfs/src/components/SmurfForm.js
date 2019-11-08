import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({name: '', age: '', height: '', id: Date.now()})
    
    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name] : e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(smurf);
        setSmurf({name: '', age: '', height: ''});
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'/>Name: 
                    <input onChange={handleChanges} name='name' type='text' placeholder='Name here...' value={smurf.name}/>
                </div>
                <div>
                    <label htmlFor='height'/>Height: 
                    <input onChange={handleChanges} name='height' type='text' placeholder='Height here...' value={smurf.height}/>
                </div>
                <div>
                    <label htmlFor='age'/>Age: 
                    <input onChange={handleChanges} name='age' type='text' placeholder='Age here...' value={smurf.age}/>
                </div>
                <button type='submit'>Add Smurf</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
        isAdding: state.isAdding
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);
