import React from 'react';
import ReactDOM from 'react-dom';

import './Template3.scss';
// import img from '../../../images/background.png';

export default class Template3 extends React.Component {
    render() {
        return (
            <div className='template3'>
                <header className='template3_header' >
                    <div className='name'>FILIP JAKUBOWSKI</div>
                    <div className='proffesion'>JUNIOR FRONT-END DEVELOPER</div>
                    <div className='contact'>
                        <h1>CONTACT</h1>
                        <p>(+48) 793 670 880</p>
                        <p>filipjakubowski9@gmail.com</p>
                        <p>github.com/filipjakubowski9</p>
                        <p>www.linkedin.com/in/filip-jakubowski-8318a6108/</p>
                    </div>
                </header>

                <div className='template3_main'>
                    <div className='projects'>
                        <h1>PROJECTS</h1>
                        <div>
                            <h3>FURRY GAME</h3>
                            <h5>github.com/filipjakubowski9/WAR_FER_S_32_REACT_Furry_Game</h5>
                            <ul>
                                <li>The game is based on object-oriented programming in JavaScript</li>
                                <li>It consists in guiding a Furry on the 10x10 board and collecting coins</li>
                                <li>The following technologies were used for the implementation: HTML, CSS, JavaScript, Webpack</li>
                            </ul>
                        </div>
                        <div>
                            <h3>GAME OF LIFE</h3>
                            <h5>github.com/filipjakubowski9/WAR_FER_S_32_Game_of_life</h5>
                            <ul>
                                <li>This game is also based on object-oriented programming in JS</li>
                                <li>It shows an interactive animation which is one of the examples of a cellular automaton</li>
                                <li>The following technologies were used for the implementation: HTML, CSS, JavaScript</li>
                            </ul>
                        </div>
                    </div>
                    <div className='experience'>
                        <h1>EXPERIENCE</h1>
                        <ul>
                            <li>Coders Lab (II-III 2018)</li>
                            <li>Coders Lab (V-VI)</li>
                        </ul>
                    </div>
                    <div className='trainings'>
                        <h1>TRAININGS</h1>
                        <ul>
                            <li>Certyfikat 1</li>
                            <li>Certyfikat 2</li>
                            <li>Certyfikat 3</li>
                            <li>Certyfikat 4</li>
                        </ul>
                    </div>
                </div>

                <div className='template3_minor'>
                    <div className='education'>
                        <h1>EDUCATION</h1>
                        <div>
                            <h3>CODERS LAB</h3>
                            <p>JavaScript developer: React bootcamp - 2018</p>
                        </div>
                        <div>
                            <h3>WAR STUDIES ACADEMY</h3>
                            <p>M.A. in Military Studies - 2017</p>
                        </div>
                    </div>
                    <div className='skills'>
                        <h1>SKILLS</h1>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>REACT</li>
                        </ul>
                    </div>
                    <div className='hobby'>
                        <h1>HOBBY</h1>
                        <ul>
                            <li>Snooker</li>
                            <li>Rock music</li>
                            <li>Geopolitics</li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}
