import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import '../styles/main.scss';

import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCB1yqZ8zzlbIIsYALYKRdpObLPgrgIpjs",
    authDomain: "moja-strona-c2202.firebaseapp.com",
    databaseURL: "https://moja-strona-c2202.firebaseio.com",
    projectId: "moja-strona-c2202",
    storageBucket: "moja-strona-c2202.appspot.com",
    messagingSenderId: "831530243928"
};
firebase.initializeApp(config);


import App from './components/App/App.jsx';
import Form from './components/Form/Form.jsx';
import Template from './components/Templates/Template.jsx';

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/form" component={Form}/>
                    <Route path="/template" component={Template}/>
                </Switch>
            </div>
        </HashRouter>,
        document.getElementById('app')
    );
});
