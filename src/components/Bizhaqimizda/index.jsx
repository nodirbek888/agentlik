import React from 'react'
import { Container,Wrapper,WrapLeft,WrapRight } from './style'
import Button from '../../Generic/Button/index'
import tel from '../../assets/img/tel.png'
import Card from './Card/index'
import Fade from 'react-reveal/Fade';
import {useNavigate } from 'react-router-dom';

const BizHaqimizda = () => {

  // const navigate = useNavigate()


  // const onSubmit = ()=>{
  //     navigate('/xizmatlar')
  //   }
  return (
    <Container className='bizhaqimizda'>
      <div className='wrapper'>
      <Wrapper>
        <Fade left>
          <WrapLeft>
            <h1 className='title res_wrap'>Digital company -
             BekAgency</h1>
             <p className='sub-title res_wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet lorem facilisis morbi pretium dictumst.</p>
             <div className='btn_wrap'>
               <Button type={'primary'}width='200px'>Xizmat narxi</Button>
             <Button type={'secondary'} width='200px'>Portfolio^ni ko’rish</Button>
             </div>
          </WrapLeft>
        </Fade>
        <Fade right>
          <WrapRight>
            <img className='img_tel' src={tel} alt="" />
          </WrapRight>
        </Fade>
      </Wrapper>
      </div>
      <div className='cards'>
      <Card/>
      </div>
    </Container>
  )
}

export default BizHaqimizda