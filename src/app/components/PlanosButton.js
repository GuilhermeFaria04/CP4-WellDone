"use client"


import Image from 'next/image';
import { styled } from 'styled-components';


function Planosbutton(props) {
    return  <div>
               <StyledButton>
                    <Centerh1>
                        {props.text}
                    </Centerh1>
                   <StyledImagem>
                        <Image 
                            id="Imagem" 
                            src="imagens/seta.svg" 
                            alt="Minha Imagem"
                            width={500}
                            height={500}>
                        </Image>
                   </StyledImagem>
               </StyledButton>
            </div>
}


export default Planosbutton;


const StyledButton = styled.button`
    width: 250px;
    height: 35px;
    color: white;
    text-align: center;
    font-family: Montserrat;
    font-size: 100%;
    font-style: normal;
    font-weight: 700;
    border-radius: 18px;
    border: 1px solid #000;
    background: #02A0FF;
    margin-top: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    
`

const StyledImagem = styled.div`
    background-color: transparent;
    width: 5%;
    margin-right:5%;
`

const Centerh1 = styled.h1`
    width: 100%;
    text-align: center;
    background-color: transparent;
    margin-left: none;
`