import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '10%',
      backgroundColor:'#002001',
    },
  });

function NavBar(){
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="About Me" value="about"  icon={<EmojiPeopleIcon style={{color:'white', fontSize: 40}} />}/>
        <BottomNavigationAction label="Linkedin" value="linkedin" href='https://www.linkedin.com/in/shaory31' icon={<LinkedInIcon style={{color:'white', fontSize: 40}} />} />
        <BottomNavigationAction label="Github" value="github" href='https://github.com/Sahory31' icon={<GitHubIcon style={{color:'white', fontSize: 40}}/>} />
        <BottomNavigationAction label="Contact Me" value="contact" icon={<ContactMailIcon style={{color:'white', fontSize: 40}}/>} />
        <BottomNavigationAction label="Projects" value="projects" icon={<DeveloperModeIcon style={{color:'white', fontSize: 40}}/>} />
      </BottomNavigation>
    );
}

export default NavBar;