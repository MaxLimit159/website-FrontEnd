import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
function componentDidMount () {
  const script1 = document.createElement("script");
  const script2 = document.createElement("script");
  const script3 = document.createElement("script");

  script1.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js";
  script2.src = "https://code.jquery.com/jquery-3.2.1.slim.min.js";
  script3.src = "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js";
  script1.async = true;

  document.body.appendChild(script1);
  document.body.appendChild(script2);
  document.body.appendChild(script3);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
componentDidMount ();
