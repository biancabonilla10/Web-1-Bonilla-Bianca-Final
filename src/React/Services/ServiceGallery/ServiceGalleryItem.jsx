import React from 'react';
import styled from 'styled-components';

import ServiceGalleryItem from './ServiceGalleryItem.jsx';

const ServiceGalleryItem = () => {

    return (
        <ServiceGalleryItemStyled className='ServiceGalleryItem'>
            ServiceGalleryItem 
            <ServiceGalleryItem />
        </ServiceGalleryItemStyled>
    );
}

export default ServiceGalleryItem;

const ServiceGalleryItemStyled = styled.div`
    
`;