import React from 'react';

import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './Form.scss';

import firebase from 'firebase';

export default class Form extends React.Component {

    saveData(data) {
        const dataRef = firebase.database().ref('data');

        dataRef.push().set(data);
    }


    submitForm = (event) => {
        event.preventDefault();

        const data = {
            name: this.name.value,
            proffesion: this.proffesion.value,
            bio: this.bio.value,
            phoneNumber: this.phoneNumber.value,
            email: this.email.value,
            github: this.github.value,
            linkedin: this.linkedin.value,
            school: this.school.value,
            specialization: this.specialization.value,
            skills: this.skills.value,
            hobby: this.hobby.value,
            title: this.title.value,
            githubLink: this.githubLink.value,
            description: this.description.value,
            company: this.company.value,
            period: this.period.value,
            duties: this.duties.value,
            certificate: this.certificate.value
        }

        this.saveData(data);
    }

    render() {
        return (
            <form className='form'>
                <div>
                    <label> BIO <br />
                        <input ref={input => this.name = input} type='text' placeholder='Name'/>
                        <input ref={input => this.proffesion = input} type='text' placeholder='Proffesion'/>
                        <textarea ref={input => this.bio = input} placeholder='Write about yourself'/>
                    </label>
                </div>
                <div>
                    <label> CONTACT <br />
                        <input ref={input => this.phoneNumber = input} type='text' placeholder='Phone number' />
                        <input ref={input => this.email = input} type='email' placeholder='Email' />
                        <input ref={input => this.github = input} type='text' placeholder='GitHub' />
                        <input ref={input => this.linkedin = input} type='text' placeholder='LinkedIn' />
                    </label>
                </div>
                <div>
                    <label> EDUCATION <br />
                        <input ref={input => this.school = input} type='text' placeholder='School' />
                        <input ref={input => this.specialization = input} type='text' placeholder='Specialization' />
                    </label>
                </div>
                <div>
                    <label> SKILLS <br />
                        <input ref={input => this.skills = input} type='text' placeholder='Skills'/>
                    </label>
                    <label> HOBBY <br />
                        <input ref={input => this.hobby = input} type='text' placeholder='Hobby'/>
                    </label>
                </div>
                <div>
                    <label> PROJECTS <br />
                        <input ref={input => this.title = input} type='text' placeholder='Title'/>
                        <input ref={input => this.githubLink = input} type='text' placeholder='Link to GitHub'/>
                        <textarea ref={input => this.description = input} placeholder='Describe your project'/>
                    </label>
                </div>
                <div>
                    <label> EXPERIENCE <br />
                        <input ref={input => this.company = input} type='text' placeholder='Company'/>
                        <input ref={input => this.period = input} type='text' placeholder='Period'/>
                        <textarea ref={input => this.duties = input} placeholder='Duties'/>
                    </label>
                </div>
                <div>
                    <label> CERTIFICATES <br />
                        <textarea ref={input => this.certificate = input} placeholder='Certificate'/>
                    </label>
                </div>
                <div>
                    <button>CLEAR</button>
                    <button onClick={this.submitForm}>SUBMIT</button>
                </div>
                <div>
                    <Link to='/'> <button className='back'></button> </Link>
                </div>
            </form>
        );
    }
}
