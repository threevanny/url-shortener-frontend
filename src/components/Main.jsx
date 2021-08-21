import React from 'react';
import '../assets/styles/components/Main.scss';

const Main = () => (
  <main>
    <div className='main__content'>
      <h1>Shortiny</h1>
      <form action=''>
        <input type='text' className='input is-rounded is-large' placeholder='Shorten your link' />
        <button type='submit' className='button is-rounded is-large'>Shorten</button>
      </form>
    </div>
  </main>
);

export default Main;
