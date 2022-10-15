import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, translateByInput, useAppDispatch } from './store/index'

import './App.css';
import Nav from './components/Nav';


function App() {
  const loading: boolean = useSelector((state: any) => state.loading)
  const translatedText: string = useSelector((state: any) => state.translatedText)
  const [message, setMessage] = useState('');
  const handleMessageChange = (event: { target: { value: string; }; }) => {
    setMessage(event.target.value)
  };
  const dispatch = useAppDispatch()
  const translate = () => {
    dispatch(translateByInput(message))
    
  }
  return (
    <div>
      <Nav />
      <div id='textareas' className='flex'>
        <textarea
          id='translate-entry-box'
          placeholder='Enter text you wish to translate'
          value={message}
          onChange={handleMessageChange}
          className='outline-none border-none text-white pl-2 pt-2 mr-5 resize-none rounded-md'>
        </textarea>

        <div
          id='translate-button'
          onClick={translate}
          className='bg-blue-500 text-center text-5xl rounded-md'>
          →
        </div>

        <textarea
          id='translate-output-box'
          placeholder='Translated output'
          className='outline-none border-none text-white pl-2 pt-2 ml-5 resize-none rounded-md'
          readOnly={true}
          value={translatedText}>
        </textarea>
        <div
          id='translate-output-overlay'
          className='hidden outline-none border-none text-white pl-2 pt-2 ml-5 resize-none rounded-md'>
          <div id='ripple-container'>
            <div className="lds-ripple"><div></div><div></div></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
