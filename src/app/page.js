"use client"

import { styled } from 'styled-components'
import Button from './components/button'
import Title from './components/Title'
import Planosbutton from './components/PlanosButton'



export default function Home() {
  return (<Center>
    <Title/>
    <Button/>
    <Planosbutton/>
  </Center>)
}


const Center = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`




