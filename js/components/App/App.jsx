import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './App.scss';


class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>
                <Link to='/form'> <button> Create </button> </Link>
                <Link to='/template'> <button> Preview </button> </Link>
                <Link to='/generate'> <button> Generate </button> </Link>
            </div>
        );
    }
}

export default class App extends React.Component {

    render() {
        return (
            <div>
                <div className='background'></div>
                <div className='card'>
                    <h1>Create your resume</h1>
                    <h3>Write your CV much easier!</h3>
                    <p>1. Fill in a form</p>
                    <p>2. Choose suitable template</p>
                    <p>3. Generate a PDF file</p>
                    <p>4. Get a job!</p>
                    <Nav />
                </div>
            </div>
        );
    }
}
