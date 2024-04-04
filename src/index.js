import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Heading from './components/Heading';
import Arithmetic from './components/Arithmetic';
import Summarize from './components/Summarize';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Heading>Basic Level</Heading>
    <Arithmetic/>
    <hr />
    <Summarize data = {[4,11,17,21,9]}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
