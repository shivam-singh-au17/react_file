import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Router
//  import Theme from './Contexts/ThemeContexts';      // CONTEX api
// import AuthContexProvider from './Contexts/AuthContex';      // CONTEX api
import {AuthContexProvider} from './Contexts/ReactRoutingV5II/AuthContex';
//  import MyFirstContexProvider from './Contexts/MyFirstContex';      // CONTEX api


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <MyFirstContexProvider> */}
    {/* <AuthContexProvider> */}
    <AuthContexProvider>
      {/* <Theme > */}
      <App />
      {/* </Theme > */}
    </AuthContexProvider>
    {/* </AuthContexProvider> */}
    {/* </MyFirstContexProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
