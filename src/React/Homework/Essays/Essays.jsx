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
            <p>Answer will go here</p>
        </Essay> 
    </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;