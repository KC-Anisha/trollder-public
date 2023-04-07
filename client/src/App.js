import React from 'react';

export default function App(){
  function callApi() {
    fetch('http://localhost:3001/details', { method: 'GET' })
      .then(data => data.json())
      .then(json => alert(JSON.stringify(json)))
  }

  return (
    <>
        <button onClick={callApi}>Call API</button>
    </>
  );
}