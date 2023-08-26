"use client"

import React, {} from 'react';
import { styled } from 'styled-components';



function Button() {

    return  <div>
                <StyledButton>Enviar</StyledButton>
            </div>
}


export default Button;

const StyledButton = styled.button`
    width: 200px;
    font-family: Montserrat;
    height: 40px;
    background-color:#02A0FF;
    color: white;
    border-style: none;
    border: 1px solid #02A0FF;
    box-shadow: 0px 4px 54px 0px #02A0FF;
    border-radius: 5%;
    font-size: 100%;
    font-weight: 600;
    margin-top: 40%;
    cursor: pointer;

    &:active{
    width: 200px;
    font-family: Montserrat;
    height: 40px;
    background-color: #02A0FF;
    color: white;
    border-style: none;
    border: 1px solid black;
    box-shadow: 0px 4px 54px 0px #02A0FF;
    border-radius: 5%;
    font-size: 103%;
    font-weight: 600;
    }
`
