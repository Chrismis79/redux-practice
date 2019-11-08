import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchSmurfs} from '../actions';

import Smurf from './Smurf';

const Village = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, [])
    if(props.isFetching){
        return <h2><span role="img" aria-labelledby='jsx-ally/accessible-emoji'>🔃</span></h2>
    }else {
        if(props.isAdding) {
            return <h2>New Smurf Moving In!</h2>
        }
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map(item => {
                return (
                    <Smurf key={item.id} 
                           name={item.name} 
                           age={item.age} 
                           height={item.height}/>
                )
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error,
        isAdding: state.isAdding
    };
};

export default connect(mapStateToProps, {fetchSmurfs})(Village);