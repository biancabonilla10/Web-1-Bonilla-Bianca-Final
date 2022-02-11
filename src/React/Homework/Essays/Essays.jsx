import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => { 
    return (
    <EssaysStyled>
        <h2>Essays</h2>
        <Essay q='S2, What is the difference between Git, Github,and Heroku?'>
            <ul>
                <li>Git:</li>
                <li> Github:</li>
                <li>Heroku: </li>
            </ul>
        </Essay>
        <Essay q='S3, What is the difference between HTML, CSS, and Java?'>
            something else
        </Essay>
        <Essay q='S4, What are Single Page Apps and how do the differ from traditional multi-page websites?'>
            yet another
        </Essay>
        <Essay q='S5, What are Single Page Apps and how do the differ from traditional multi-page websites?'>
            <ul>
                <li><b>Web Designer:</b> Answer</li>
                <li><b>Front End Developer:</b> Programmer:</li>
                <li><b>Back End Developer:</b> Programmer:</li>
            </ul>
        </Essay> 
        <Essay q='S6. Distinguish the difference between Site Relative , Document Relative, and Absolute Paths'>
        <ul>
            <li><b>Site Relative:</b> Answer</li>
            <li><b>Document Relative:</b> Answer</li>
            <li><b>Absolute Paths:</b> Answer</li>
        </ul>
    </Essay>
    <Essay q= 'What is the difference between jpg, gif, png, and SVG images?'>
        <p>Answer here</p>
        </Essay>
    <Essay q= 'Define the following roles: Project Manager, Business Analyst, Scrum ETC.?'>
        <p>Answer here</p>
        </Essay> 
    <Essay q= 'What is considered the right size format for an image or video asset?'>
        <p>Answer here</p>
        </Essay> 
    </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;