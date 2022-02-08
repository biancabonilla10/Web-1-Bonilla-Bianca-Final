import React from 'react';
import styled from 'styled-components';

import ServiceMenuItem from './ServiceMenuItem.jsx';

const ServiceMenuItem = () => {

    return (
        <ServiceMenuItemStyled className='ServiceMenuItem'>
            ServiceMenuItem 
            <ServiceMenuItem />
        </ServiceMenuItemStyled>
    );
}

export default ServiceMenuItem;

const ServiceMenuItemStyled = styled.div`
    
`;