import React, { useState } from 'react';
import { GlobalContext } from './GlobalContextProvider';

//export default

const LogIn = () => {
    const {username, password} = React.useContext(GlobalContext);

        const [UserName, setUsername] = useState("");
        const[UserPassword, setPassword] = useState("");
    return <>
        <label>Username: </label>
        <input type='text' onChange={event => setUsername(event.target.value)}></input>
        <label>Password: </label>
        <input type='text' onChange={event => setPassword(event.target.value)}></input>
        <button onClick={() => {
            if(UserName === username && password === UserPassword){
                console.log("Ingreso exitoso");}else{
                    console.log("Ingreso fallido");
                };
            }}>LogIn</button>
    </>
};

export default LogIn;