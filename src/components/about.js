import React from 'react';
import PetsIcon from '@material-ui/icons/Pets';
import SchoolIcon from '@material-ui/icons/School';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
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
            </div>
        </div>
    )
}

export default About;