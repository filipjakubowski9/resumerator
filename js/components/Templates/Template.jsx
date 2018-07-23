import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import firebase from 'firebase';

import Template1 from './Template1.jsx';
import Template2 from './Template2.jsx';
import Template3 from './Template3.jsx';

import './Template.scss';

class TemplateNav extends React.Component {
    render() {
        return (
            <div className='templates'>
                <p> Choose a template </p>
                <div>
                    <Link to="/template/template1">Template 1</Link>
                    <Link to="/template/template2">Template 2</Link>
                    <Link to="/template/template3">Template 3</Link>
                </div>
                <Link to='/'> <button className='back'>back</button> </Link>
            </div>
        )
    }
}


export default class Template extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const db = firebase.database().ref('data')

        db.on("value", (data) => {
            const obj = data.val();
            const firstKey = Object.keys(data.val())[Object.keys(data.val()).length - 1]

            console.log(firstKey)

            this.setState({
                data: obj[firstKey]
            })
        });
    }


    render() {
        return (
            <div>
                <TemplateNav />
                <div>
                    <Route path="/template/template1" render={(props) => <Template1 {...props} userData={this.state.data}/>}/>
                    <Route path="/template/template2" render={(props) => <Template2 {...props} userData={this.state.data}/>}/>
                    <Route path="/template/template3" render={(props) => <Template3 {...props} userData={this.state.data}/>}/>
                </div>

            </div>
        )
    }
}
