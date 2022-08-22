import React from 'react'
import {Container, Wrapper,WrapLeft,WrapRight} from './style'
import Button from '../../../Generic/Button/index'

const Box = () => {
  return (
    <Container>
        <Wrapper>
            <WrapLeft>
                <h1 className='title_white'>Xozir qo’ng’iroq qiling va 30% skidkaga ega bo’ling</h1>
            </WrapLeft>
            <WrapRight>
                <Button type={'primary'} width='230px' height='60px'>Qo’ng’iroq qilish</Button>
            </WrapRight>
        </Wrapper>
    </Container>
  )
}

export default Box