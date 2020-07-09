import React, { useContext } from 'react';

import { Context } from '../context'

function handleUser(e, setUser) {
    setUser(e.target.value);
}

function handleId(e, setId) {
    setId(e.target.value);
}

function handleLogin(history) {
    history.push('/homeWithContext');
}

export default ({ history }) => {
    const { id, setId, user, setUser } = useContext(Context);
    const store = process.env.REACT_APP_STORE;
  console.log(store);
    return (
        <div>
            {user}
            <h2>Page A with Context</h2>
            Id: <input defaultValue={id} onChange={e => handleId(e, setId)}></input><br/>
            User: <input defaultValue={user} onChange={e => handleUser(e, setUser)}></input>
            <button onClick={() => handleLogin(history)}>Login</button>
        </div>
    )
}