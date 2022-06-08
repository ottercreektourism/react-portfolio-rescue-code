import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from '../components/Content';
import ProfilePic from '../components/ProfilePic';


function AboutMePage(props) {
    return(
        <div>
            <Jumbo title={props.title}/>
            {/* <Content textContent={props.textContent}> </Content> */}
            <ProfilePic className="profilepic"/>
            <Content>
                <p>Hi! My name is Marissa Flynn. I am a full-stack web developer and a life-long student of anthropology and emergency medical research. </p>
                <p>Since graduating with a BA in anthropology from the University of Vermont in 2020, I have been excitedly pursuing an education in various programming languages, hoping to eventually combine my love for clinical research and web development.</p>
                <p>In June of 2022, I attained a certificate in Full Stack Web Development through the University of New Hampshire for my proficiency in JavaScript, HTML, CSS, and SQL, as well as security and session storage, the MERN stack, and Git, with prior experience in Python, Geographic Information Systems and REDcap (Research Electronic Data Capture) software. </p>
            </Content>
        </div>
    )
}



export default AboutMePage;