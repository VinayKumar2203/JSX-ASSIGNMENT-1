import { useState } from 'react'

function MyComponent() {
  const showAlert = () => {
    alert('Hello');
  };

  return (
    <>
      <p>React is a javascript library</p>
      <div className="main">
        <p>Click the below button to alert 'Hello'</p>
        <button onClick={showAlert}>Alert Hello</button>
      </div>
    </>
  );
};

function App() {
  return(
    <>
      <MyComponent />
    </>
  );

};
export default App;


