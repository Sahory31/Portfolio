import React from 'react';
import Profile1 from '../Images/Profile1.jpg';
import '../styles/header.css';

function CoverPage() {
    return(
        
        <div className='container'>
            <img className='profile'
                src={Profile1}
                alt="Profile"
                />
            <div className='coverPage'>
                <h1 className='hello'>¡Hello! I'm</h1>
                <h2>Brenda Sandoval</h2>
                <h3> FRONT-END DEVLEOPER JR.</h3>
            </div>
        </div>
    );

}

export default CoverPage;