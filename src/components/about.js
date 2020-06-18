import React from 'react';
import PetsIcon from '@material-ui/icons/Pets';
import '../styles/About.css';


function About(){

    return (
        <div className='informationAboutMe'>
            <div className='description'>
                <h1>About Me:</h1>
                <p>
                    Dynamic and energetic Front-end developer, from Guadalajara, Mexico. 
                    I am always open to challenges and new learning. 
                    Passionate about dancing and kittens  .
                <PetsIcon style={{fontSize: 20}}/>
                </p>
            </div>
        </div>
    )
}

export default About;