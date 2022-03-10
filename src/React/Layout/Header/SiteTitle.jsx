import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>The Ranch Malibu</h2>
            <h3>Luxury, Fitness, Wellness, and Health</h3>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    color: darkslategray;
    text-align: left;

    h2 {
        margin: 0px;
        font-size: 40px;
    }
    h3 {
        margin: 0px;
        font-size: 20px;
    }
`;