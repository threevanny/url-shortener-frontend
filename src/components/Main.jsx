import React, { useState } from 'react';
import '../assets/styles/components/Main.scss';
import axios from 'axios';

const API = 'http://localhost:3000/';

function Main() {
  const [data, setData] = useState({ url: '' });
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  function submit(e) {
    document.getElementById('url').value = '';
    e.preventDefault();
    axios.post(API, { url: data.url }).then((res) => {
      document.getElementById('result_url').innerText = `localhost:3000/l/${res.data.shorturl}`;
    });
  }

  return (
    <main>
      <div className='main__content'>
        <h1>Shortiny</h1>
        <form onSubmit={(e) => submit(e)}>
          <input onChange={(e) => handle(e)} value={data.url} type='text' className='input is-rounded is-large' id='url' name='url' placeholder='Shorten your link' />
          <button type='submit' id='btn' className='button is-rounded is-large'>Shorten</button>
        </form>
        <div className='div__result'><p id='result_url'> </p></div>
      </div>
    </main>
  );
}

export default Main;
