import React from 'react';
import PetsIcon from '@material-ui/icons/Pets';
import SchoolIcon from '@material-ui/icons/School';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BuildIcon from '@material-ui/icons/Build';
import CodeIcon from '@material-ui/icons/Code';
import '../styles/About.css';


function About(){

    return (
        <div className='informationAboutMe'>
            <div className='description'>
                <h1><EmojiPeopleIcon style={{fontSize: 50, color:'#002001'}}/>About Me:</h1>
                <p>
                    Dynamic and energetic Front-end developer, from Guadalajara, Mexico. 
                    I am always open to challenges and new learning,
                    Passionate about dancing and kittens  .
                <PetsIcon style={{fontSize: 20}}/>
                </p>
            </div>
            <div className='education'>
                <h1><SchoolIcon style={{fontSize: 50, color:'#002001'}}/>Educational background</h1>
                <p className='Laboratoria'>
                    Laboratoria Guadalajara 2019 -2020 <CodeIcon style={{fontSize: 40, color:'orange'}}/>
                </p>
                <p>
                    Front end development, managing the programming language of JavaScript, html5, CSS, and React.js.
                </p>
                <p className='unadm'>
                    Universidad Abierta y a Distancia de México (UNADM) 2019-2024
                </p>
                <p>
                    Bachelor of Engineering in Software Development
                </p>
            </div>
            <div className='technologies'>
            <h1><BuildIcon style={{fontSize: 50, color:'#002001'}}/>Technologies</h1>



            
            </div>
        </div>
    )
}

export default About;