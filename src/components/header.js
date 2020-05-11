import React from 'react';
import '../styles/header.css';
import Linkedin from '../ImgsPortfolio/linkedin-blanco.png';
import Github from '../ImgsPortfolio/Github.png';
import Mail from '../ImgsPortfolio/mail.png';

function CoverPage() {
    return(
        <div className='container'>
            <div className='coverPage'>
                <div className='imageContainer'>
                <h1 className="Im">I'M A</h1>
                <h1 className='front'>FORNT-END</h1>
                <h1 className='dev'>DEVELOPER</h1>
                </div>
            </div>
            <div className='btns'>
            <div className='linkedin'>
            <img 
            className='imgLinkedin'
            src={Linkedin}/>
            </div>
            <div className='gitHub'>
            <img 
            className='imgGithub'
            src={Github}/>
            </div>
            <div className='e-mail'>
            <img 
            className='imgEmail'
            src={Mail}/>
            </div>
            </div>
        </div>
    );

}

export default CoverPage;
/*<div className='btns'>
<div className='linkedin'>L</div>
<div className='gitHub'>G</div>
<div className='e-mail'>E</div>
</div>
<div className='references'>
<div className='linkedin'>Direcciones</div>
<div className='gitHub'>About</div>
<div className='e-mail'>Schooling</div>
<div className='linkedin'>Projects</div>
</div>*/