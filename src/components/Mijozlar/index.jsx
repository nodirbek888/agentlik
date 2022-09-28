import React from 'react'
import {Container,Wrapper,Card} from './style'
import tema from '../../assets/img/m_tema.png'
import binary from '../../assets/img/m_binary.png'
import diamond from '../../assets/img/m_diamond.png'
import EcoMotors from '../../assets/img/m_EcoMotors.png'
import jaga_pizza from '../../assets/img/m_jaga-pizza.png'
import just_edu from '../../assets/img/m_just-edu.png'
import lauren from '../../assets/img/m_lauren.png'
import med_plaza from '../../assets/img/m_med-plaza.png'
import nokia_optom from '../../assets/img/m_nokia-optom.png'
import orzu from '../../assets/img/m_orzu.png'
import academy from '../../assets/img/wise-world-academy-.png'
const Mijozlar = () => {
  return (
    <Container className='mijozlar'>
      <h1 className='description'>Bizning mijozlar</h1>
      <Wrapper>
        <Card><img src={tema} alt="logo" /></Card>
        <Card><img src={binary} alt="logo" /></Card>
        <Card><img src={diamond} alt="logo" /></Card>
        <Card><img src={EcoMotors} alt="logo" /></Card>
        <Card><img src={jaga_pizza} alt="logo" /></Card>
        <Card><img src={just_edu} alt="logo" /></Card>
        <Card><img src={lauren} alt="logo" /></Card>
        <Card><img src={med_plaza} alt="logo" /></Card>
        <Card><img src={nokia_optom} alt="logo" /></Card>
        <Card><img src={orzu} alt="logo" /></Card>
        <Card><img src={academy} alt="logo" /></Card>
      </Wrapper>
    </Container>
  )
}

export default Mijozlar