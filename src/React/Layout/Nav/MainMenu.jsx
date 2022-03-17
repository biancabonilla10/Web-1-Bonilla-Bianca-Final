import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom'

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const MainMenu = ({showMenuUpdate}) => {

    const clickHandler = () => {
        showMenuUpdate(false);
    }

    return (
        <MainMenuStyled className='MainMenu'>
            <NavLink onClick={ clickHandler } to={ '/' }>Welcome</NavLink>
            <NavLink onClick={ clickHandler } to={ '/services' }>Services</NavLink>
            <NavLink onClick={ clickHandler } to={ '/contact' }>Contact</NavLink>
            <NavLink onClick={ clickHandler } to={ '/media' }>Media</NavLink>
            <NavLink onClick={ clickHandler } to={ '/homework' }>Homework</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`
    a{
        display: block;
        color: darkslategrey;
        margin: 5px 0px;
        background-color: whitesmoke;
        opacity: 65%;
        height: 50px;
        line-height: 55px;
        text-decoration: none;
        text-align: center;

        text-transform: uppercase;
        font-weight: bold;

        &:hover {
            background-color: whitesmoke;
        }
        &:active {
            color: #007373;
            background-color: #AEE6E6;
        }

    }
    @media ${defaultMediaQueries.mdUp} {
        display: flex;
        justify-content: center;
        a {
            display: inline-block;
            width: 200px;
            margin: 0px 10px;
            font-size: 18px;
            border-radius: 2px;
        }
    }
`;