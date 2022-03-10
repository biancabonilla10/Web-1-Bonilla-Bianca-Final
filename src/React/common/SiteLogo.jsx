import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLeaf,
} from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={ faLeaf } />

const SiteLogo = () => {

    return (
        <SiteLogoStyled className='SiteLogo'>
            <FontAwesomeIcon icon={ faLeaf } className='leaf-icon' />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
color: darkslategray;
width: 100%;
height: 100%;

svg.leaf-icon {
    width: 100px;
    height: auto;
}
`;