import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Featured from './components/Featured/Featured';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Section/>
    <Featured/>
    <Services/>
    <Blog/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
