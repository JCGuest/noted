import React, { useState } from 'react';

const Window = () => {
  const [input, setInput] = useState('http://www.johnguestdev.com/');

  return (
    <div className='window'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <iframe className='iframe' src={input}></iframe>
    </div>
  );
};

export default Window;
