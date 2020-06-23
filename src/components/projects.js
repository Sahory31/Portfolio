import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Cipher from '../Images/cipher.jpg';
import DataLovers from '../Images/dataLovers.jpg';
import FemmeApp from '../Images/femmeApp.jpg';
import LabMovies from '../Images/labMovies.jpg';
import Misai from '../Images/misai.jpg';

function Projects() {
    const style = {
		height:'100%',
		width: '100%',
        background:'#00200',
        margin: '3%'
    }
    const styleImgs={
        color:'black', 
        fontSize: '2em', 
        background: '#e7d5cb',
    }
    return(
    <Carousel 
        centerMode
        infiniteLoop
        showThumbs
        autoPlay
    >        
        <div>
            <img src={Cipher} style={style} alt='cipher'/>
            <p className="legend" style={styleImgs}>Clasified Cipher</p>
        </div>
        <div>
            <img src={DataLovers} style={style} alt='dataLovers'/>
            <p className="legend" style={styleImgs}>Data Lovers</p>
        </div>
        <div>
            <img src={FemmeApp} style={style} alt='femmeApp'/>
            <p className="legend" style={styleImgs}>Femme App</p>
        </div>
        <div>
            <img src={LabMovies} style={style} alt='labMovies'/>
            <p className="legend" style={styleImgs}>Lab Movies</p>
        </div>
        <div>
            <img src={Misai} style={style} alt='misai'/>
            <p className="legend" style={styleImgs}>Misai</p>
        </div>
    </Carousel>
    );

}

export default Projects;