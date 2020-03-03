import React from 'react';
import './App.css';
import {GlobalContextProvider} from './components/GlobalContextProvider'
import LogIn from './components/LogIn'

function App() {
  return (
    <>
    <div style={{backgroundColor: "red"}}>Hola</div>
    <GlobalContextProvider settings={{username:"admin", password:"adminpsw",}}>
      <LogIn/>
    <div className="App">
     
    </div>
    </GlobalContextProvider>
    </>
    
  );
}

export default App;
