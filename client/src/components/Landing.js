import React, { useState } from 'react';

const Landing = () => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Connector</h1>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <input
              type='text'
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <input type='submit' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Landing;
