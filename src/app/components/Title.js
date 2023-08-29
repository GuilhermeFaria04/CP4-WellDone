"use client"


import { styled } from 'styled-components';


function Title(props) {
    return  <div>
                <StyledTitulo>{props.text}</StyledTitulo>
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