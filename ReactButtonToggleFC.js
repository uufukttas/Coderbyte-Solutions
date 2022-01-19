import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState(true);

  const handleClick = () => {
    setState(!state);
  }

  return (
    <button onClick={handleClick}>{state ? 'ON' : 'OFF'}</button>
  )
}