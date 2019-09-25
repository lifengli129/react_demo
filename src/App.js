/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-11 15:46:55
 * @LastEditTime: 2019-09-25 15:54:38
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import logo from '@/logo.svg';
import '@/App.css';

// require('@/mock/index.js');
require('@/mock/mockServer.js');


import HomePage from '@/pages/HomePage'


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <HomePage />
      </header>
    </div>
  );
}

export default App;
