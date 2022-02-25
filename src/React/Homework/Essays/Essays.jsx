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
        <p>Whatever size with the fastest download and best quality</p>
        </Essay> 
    <Essay q= 'What does it mean for a company to be Agile? What are the pros and cons to being Agile?'>
        <p>Answer here</p>
        </Essay> 
        <Essay q= 'What are testing environments? What is the difference between Local, Dev, QA, and Production?'>
        <p>A testing enbironment is:</p>

                <ul>
                    <li><b>Local:</b></li>
                    <li><b>Dev:</b></li>
                    <li><b>QA:</b>Quality Assurance Testing</li>
                    <li><b>Production:</b></li>
                </ul>
            </Essay> 
            <Essay q= 'S12 Function vs Form: When are web images considered part of the content: (HTML) as opposed to part of the appearance (CSS)?'>
                <p>Answer here</p>
            </Essay> 
            <Essay q="S13. What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)">
                <p>Answer will go here for Monday.</p>
            </Essay>
    </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;