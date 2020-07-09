import React, { useState } from 'react';

import { useDispatch, connect } from 'react-redux';

function handleState(e, setState) {
    setState(e.target.value);
}

function handleLogin(id, user, dispatch, history) {
    dispatch({ type: 'LOGIN', id, user })
    history.push('/homeWithRedux');
}

function LoginWithRedux (props) {
    const [ id, setId ] = useState(props.id);
    const [ user, setUser ] = useState(props.user);

    const dispatch = useDispatch();
    return (
        <div>
            <h2>Page A with Context</h2>
            Id: <input defaultValue={props.id} onChange={e => handleState(e, setId)}></input><br/>
            User: <input defaultValue={props.user} onChange={e => handleState(e, setUser)}></input>
            <button onClick={() => handleLogin(id, user, dispatch, props.history)}>Login</button>
        </div>
    )
}

const mapStateToProps = function(state) {
    return {
        id: state.data.id,
        user: state.data.user,
    }
}

export default connect(mapStateToProps)(LoginWithRedux);