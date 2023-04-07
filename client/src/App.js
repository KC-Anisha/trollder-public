import React from 'react';
import MyNavbar from './components/Navbar';

export default function App(){
  function callApi() {
    fetch('http://localhost:3001/details', { method: 'GET' })
      .then(data => data.json())
      .then(json => alert(JSON.stringify(json)))
  }

  return (
    <>
        <MyNavbar/>
        {/* <button onClick={callApi}>Call API</button> */}
    </>
  );
}