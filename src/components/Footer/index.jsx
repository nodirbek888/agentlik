import React from 'react'
import {Container,Wrapper,WrapLeft,WrapRight,Icon} from './style'
import like from '../../assets/img/like.png'
import Imput from '../../Generic/Input/index'
import Button from '../../Generic/Button/index'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <WrapLeft>
                <h1 className='description_white'>A’loqa</h1>
                <div>
                    <h2 className='sub-title_white'>Manzilni yozomiz dolor, sit consectetur adipiscing</h2>
                </div>
                <div className='communication'>
                    <a className='sub-title_white' href="#">loremipsum@gmail.com</a>
                    <p className='sub-title_white'>+99893 337 24 31</p>
                    <p className='sub-title_white'>+99893 094 65 52</p>
                    <div className='communication_item'>
                        <a href="#">
                        <Icon.Telegram/>
                        </a>
                        <a href="#">
                        <Icon.Youtube/>
                        </a>
                        <a href="#">
                        <Icon.Instagram/>
                        </a>
                    </div>
                </div>
                <div className='img_wrap'>
                    <img className='img_like' src={like} alt="img" />
                </div>
            </WrapLeft>

            <WrapRight>
                <h1 className='description'>O’z brendingzni biz bilan rivojlantirmoqchi bo’lsangiz. Biz bilan bog’laning.</h1>
                <p className='des_wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sodales lectus eu sit sed ultrices nec, sed. Pulvinar libero diam natoque mus augue mollis sit euismod.</p>
                <form>
                <Imput width='100%' hight='50px' placeholder='Ismingiz'/>
                <Imput width='100%' hight='50px' placeholder='Telefon raqam'/>
                <Imput width='100%' hight='50px' placeholder='Email'/>
                <div className='checkbox_wrap'>
                    <input className='checkbox_color' type="checkbox" />
                    <p className='small-description'>Men shaxsiy ma’lumotlarimni berishga roziman</p>
                </div>
                </form>
                <div className='btn_wrap'>
                    <Button type={'primary'} width='200px'>Yuborish</Button>
                </div>
            </WrapRight>
        </Wrapper>
    </Container>
  )
}

export default Footer