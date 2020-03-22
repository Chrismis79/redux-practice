import React from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../redux/actions'; 

const PeopleList = () => {
    return (
        <div>

        </div>
    )
}

mapStateToProps = state => {
    return {
        people: state.people,
        isFetching: state.isFetching,
        error: state.error,
        isAdding: state.isAdding
    }
}

export default connect(mapStateToProps, {fetchPeople})(PeopleList);
