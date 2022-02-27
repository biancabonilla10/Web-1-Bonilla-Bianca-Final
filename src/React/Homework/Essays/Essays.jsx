import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => { 
    return (
    <EssaysStyled>
        <h2>Essays</h2>
        <Essay q='S2, What is the difference between Git, Github,and Heroku?'>
            <ul>
                <li><b>Git:</b> Git is a system where users can manage versions, edit, and merge branches on their own systems. One benefit is that Git is a free software. </li>
                <li><b>Github:</b> Github is a remote server where users can work with others to review and edit code. It is a domain for Git Repos.</li>
                <li><b>Heroku:</b> Heroku is a web or app based server where users can push and deploy code on a team oriented cloud based software.</li>
            </ul>
        </Essay>
        <Essay q='S3, What is the difference between HTML, CSS, and JS?'>
            <ul>
                <li><b>HTML:</b> HTML stands for Hypertext Markup Language meaning that the text code entered into a software will allow a website to be built through the pages creation and structural elements.  HTML is like an architect because it’s language is the basis for the website’s structure and it allows the site to be placed together. </li>
                <li><b>CSS:</b> CSS stands for Cascading Style Sheets and allows for the style of the website to be realized. CSS allows for changes in color, logos, styles of texts, fonts and all sorts of details that make a website appealing to an audience. </li>
                <li><b>JS:</b> Java is used to interact with people using the website through content. Java is responsible for the behavior of the website and how the elements put in place by HTML and CSS are interacted with the user. HTML, CSS, and Java are all reliant on one another to work together to make a website look good and work for the user.

</li>
            </ul>
        </Essay>
        <Essay q='S4, What are Single Page Apps and how do the differ from traditional multi-page websites?'>
        A single page app can be seen as the simplest form of a website. When interacting with the user a SPA will show the website through the use of one main page. The SPA doesn’t load and reload a page. The code uses HTML, CSS, and Javascript to create what is visually seen in the website. 
SPA’s are different from traditional multi-page websites because they don’t communicate between the server. Rather SPA’s communicate directly with the code to hopefully create a quicker experience for the user. Traditional multi-page websites are navigated by clicking on new links that open up new pages within the site. This method has been well used, but is slower to load and takes much longer to create. 


        </Essay>
        <Essay q='S5, What is the difference between Web Designer, Front End Developer and Back End Developer?'>
            <ul>
                <li><b>Web Designer:</b> A web designer is someone who incorporates elements of design into web applications. They come from a multidisciplinary background and incorporate elements of graphic design, ux/ui design, search engine optimization, and work with developers who code for the website.</li>
                <li><b>Front End Developer:</b> A front end developer is someone who uses code languages such as HTML, CSS, and Javascript to create the look of a website. Front end developers create what a user will interact with on the website screen.</li>
                <li><b>Back End Developer:</b> A back end developer is someone who focuses their attention on the website server. They help create the hardware in order to power the software elements of a website. Without a back end developer there wouldn’t even be a server to host the website on. 
</li>
            </ul>
        </Essay> 
        <Essay q='S6, Distinguish the difference between Site Relative , Document Relative, and Absolute Paths'>
        <ul>
            <li><b>Site Relative:</b> A Site Relative path is an easier way for developers to host information to a website because the URL links to the root of the site.</li>
            <li><b>Document Relative:</b> A Document Relative path are best used for local links because the resource link is in the document writing of the link.</li>
            <li><b>Absolute Paths:</b> An Absolute path shows the whole URL of the website. </li>
        </ul>
    </Essay>
    <Essay q= 'S7, What is the difference between jpg, gif, png, and SVG images?'>
        <ul>
            <li><b>JPG:</b> 
JPG images are commonly used images that can easily be saved and downloaded. JPG’s don’t have the best quality out of image types. When the size is enlarged or decreased, it may become fuzzy or pixelated.
</li>
            <li><b>GIF:</b> GIF images stand for graphic interchange format. GIF’s are popular among animated images</li>
            <li><b>PNG:</b> PNGs stand for portable network graphics. It is an uncompressed raster image format. They are popular on websites because they are a higher quality image.</li>
            <li><b>SVG:</b> SVG stands for scalable vector graphics. Unlike all the other image types, SVG’s don’t use pixels. The quality and properties are more diverse than other image types.
</li>
        </ul>
        </Essay>
    <Essay q= 'S8, Define the following roles: Project Manager, Business Analyst, Scrum ETC.?'>
        <ul>
            <li><b>Project Manager:</b> A project manager is in charge of leading the project a team of people are working on. They will oversee, coordinate, and help out where necessary.</li>
            <li><b>Business Analyst:</b> A business analyst is responsible for overlooking business goals, trends, and outcomes from previous and current work in order to help the team map out projects.</li>
            <li><b>Scrum Master:</b> A scrum master is similar to a project manager as they oversee things, but a scrum master focuses on individuals while a project manager does the actual project.</li>
            <li><b>UX Designer:</b> A UX designer is someone who is focused on the user of the project the team is working on. They are responsible for conducting initial research, creating prototypes, and hi-fidelity mockups to pass on to developers for the final project.</li>
            <li><b>Web Developer/Engineer:</b> A web developer/engineer is the person who codes for the project. They are the front-end developers that bring to life the project so that users may begin to experience it.</li>
            <li><b>Quality Assurance Tester:</b> A quality assurance tester is someone who begins to use the product for the first time to ensure the design works and will be received well before its launch to the public.</li>
            <li><b>DevOps:</b> A devops developer is someone who focuses on releasing updates and creating efficiency between launches. They manage code releases and scheduling.
</li>
        </ul>
        </Essay> 
    <Essay q= 'S9, What is considered the right size format for an image or video asset?'>
        <p>Whatever size with the fastest download and best quality</p>
        </Essay> 
    <Essay q= 'S10, What does it mean for a company to be Agile? What are the pros and cons to being Agile?'>
        <h4>Pros and Cons</h4>
        <ul>
            <li>More predictable</li>
            <li>Turnaround time and flexibility makes companies more manageable</li>
            <li>Consistent team, management, and design</li>
        </ul>
        </Essay> 
        <Essay q= 'S11, What are testing environments? What is the difference between Local, Dev, QA, and Production?'>
        <p>A testing environment is:</p>
        

                <ul>
                    <li><b>Local:</b> When a developer builds and tests code on their own software and hardware.</li>
                    <li><b>Dev:</b> When the developer pairs code reviews. </li>
                    <li><b>QA:</b>Quality Assurance Testing when QA developers test as a team.</li>
                    <li><b>Production:</b> When a website goes live for users to access.</li>
                </ul>
            </Essay> 
            <Essay q= 'S12, Function vs Form: When are web images considered part of the content: (HTML) as opposed to part of the appearance (CSS)?'>
                <p> Images are best utilized in HTML for printing as CSS is only on when intentionally set for viewing. CSS is used when altering image states such as opacity. </p>
            </Essay> 
            <Essay q="S13, What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)">
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