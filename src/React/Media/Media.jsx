import React from 'react';
import styled from 'styled-components';

import Youtube from './Youtube.jsx';

const Media = () => {

    return (
        <MediaStyled className='Media'>
            <h1>Media</h1> 
            <Youtube />
        </MediaStyled>
    );
}

export default Media;

const MediaStyled = styled.div`
    
`;