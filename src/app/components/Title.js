"use client"

import React from 'react';
import { styled } from 'styled-components';


function Title() {
    return  <div>
                <StyledTitulo>Planos de Seguro</StyledTitulo>
            </div>
}

export default Title;


const StyledTitulo = styled.h1`
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 280%;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 40%;
`