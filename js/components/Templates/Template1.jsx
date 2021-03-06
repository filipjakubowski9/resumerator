import React from 'react';
import ReactDOM from 'react-dom';

import './Template1.scss';
// import img from '../../../images/background.png';

export default class Template1 extends React.Component {


    render() {
        return <div className='template1'>
            <header className='template1_header' >
                {console.log(this.props.userData)}
                <div className='name'>{this.props.userData.name}</div>
                <div className='proffesion'>{this.props.userData.proffesion}</div>
                <div className='aboutMe'>{this.props.userData.bio}</div>
            </header>

            <div className='template1_minor'>
                <div className='photo'> </div>
                <div className='contact'>
                    <h1>CONTACT</h1>
                    <p>{this.props.userData.phoneNumber}</p>
                    <p>{this.props.userData.email}</p>
                    <p>{this.props.userData.github}</p>
                    <p>{this.props.userData.linkedin}</p>
                </div>
                <div className='education'>
                    <h1>EDUCATION</h1>
                    <div>
                        <h3>{this.props.userData.school}</h3>
                        <p>{this.props.userData.specialization}</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='skills'>
                    <h1>SKILLS</h1>
                    <ul>
                        <li>{this.props.userData.skills}</li>
                    </ul>
                </div>
                <div className='hobby'>
                    <h1>HOBBY</h1>
                    <ul>
                        <li>{this.props.userData.hobby}</li>
                    </ul>
                </div>
            </div>

            <div className='template1_main'>
                <div className='projects'>
                    <h1>PROJECTS</h1>
                    <div>
                        <h3>{this.props.userData.title}</h3>
                        <h5>{this.props.userData.githubLink}</h5>
                        <ul>
                            <li>{this.props.userData.description}</li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='experience'>
                    <h1>EXPERIENCE</h1>
                    <ul>
                        <li>{this.props.userData.company} ({this.props.userData.period})</li>
                        <p>{this.props.userData.duties}</p>
                    </ul>
                </div>
                <div className='trainings'>
                    <h1>TRAININGS</h1>
                    <ul>
                        <li>{this.props.userData.certificate}</li>
                    </ul>
                </div>
            </div>

            <footer className='template1_footer'>
                <p>I hereby give consent for my personal data included
                    in my application to be processed for the purposes
                    of the recruitment process under the Personal Data
                    Protection Act as of 29 August 1997, consolidated
                    text: Journal of Laws 2016, item 922 as amended.</p>
            </footer>
        </div>;
    }
}
