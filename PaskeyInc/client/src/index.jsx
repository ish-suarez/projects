import React ,{Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>It is coming from space. Please be patient :)</div>}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
