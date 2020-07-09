import React from 'react';
import { connect } from 'react-redux';

function HomeWithRedux(props) {
    
    return (
        <div>
            <h2>Home with Redux</h2>
            <p>ID: {props.id}</p>
            <p>User: {props.user}</p>
        </div>
    )
}

const mapStateToProps = function(state) {
    return {
        id: state.data.id,
        user: state.data.user,
    }
}

export default connect(mapStateToProps)(HomeWithRedux);

