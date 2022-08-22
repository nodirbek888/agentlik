import React from 'react'
import Button from '../../Generic/Button'
import {Container,Wrapper,CardOne,CardTwo} from './style'

const Xizmatlar = () => {
  return (
    <Container className='xizmatlar'>
      <h1 className='description des_wrap'>Xozir olib borilayotgan va tugatilga xizmatlar bilan tanishing</h1>
      <Wrapper>
          <CardOne>
            <h1 className='description_white'>Lorem ipsum dolor sit amet</h1>
              <h2 className='sub-title_white'>Natija</h2>
            <div className='result_wrap'>
              <h1 className='description_white'>30</h1>
              <p className='small-description_white'>Lorem ipsum dolor</p>
            </div>
            <div className='result_wrap'>
              <h1 className='description_white'>45</h1>
              <p className='small-description_white'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='result_wrap'>
              <h1 className='description_white'>84%</h1>
              <p className='small-description_white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, neque?</p>
            </div>  
          </CardOne>

          <CardOne>
            <h1 className='description_white'>Lorem ipsum dolor sit amet</h1>
              <h2 className='sub-title_white'>Natija</h2>
            <div className='result_wrap'>
              <h1 className='description_white'>30</h1>
              <p className='small-description_white'>Lorem ipsum dolor</p>
            </div>
            <div className='result_wrap'>
              <h1 className='description_white'>45</h1>
              <p className='small-description_white'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='result_wrap'>
              <h1 className='description_white'>84%</h1>
              <p className='small-description_white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, neque?</p>
            </div>  
          </CardOne>

          <CardTwo>
            <h1 className='description_white'>Lorem ipsum dolor sit amet</h1>
            <p className='small-description_white'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <div className='cardtwo_wrap'>
              <h1 className='sub-title_white'>Vzifa</h1>
              <p className='sub-title_white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ut pharetra, euismod nulla vel. Diam amet, neque ut risus, enim nisl iaculis facilisis.
              </p>
            </div>
          </CardTwo>
          <CardTwo>
            <h1 className='description_white'>Lorem ipsum dolor sit amet</h1>
            <p className='small-description_white'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <div className='cardtwo_wrap'>
              <h1 className='sub-title_white'>Vzifa</h1>
              <p className='sub-title_white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ut pharetra, euismod nulla vel. Diam amet, neque ut risus, enim nisl iaculis facilisis.
              </p>
            </div>
          </CardTwo>
          <CardTwo>
            <h1 className='description_white'>Lorem ipsum dolor sit amet</h1>
            <p className='small-description_white'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <div className='cardtwo_wrap'>
              <h1 className='sub-title_white'>Vzifa</h1>
              <p className='sub-title_white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ut pharetra, euismod nulla vel. Diam amet, neque ut risus, enim nisl iaculis facilisis.
              </p>
            </div>
          </CardTwo>
          <CardTwo>
            <h1 className='description_white'>Lorem ipsum dolor sit amet</h1>
            <p className='small-description_white'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <div className='cardtwo_wrap'>
              <h1 className='sub-title_white'>Vzifa</h1>
              <p className='sub-title_white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ut pharetra, euismod nulla vel. Diam amet, neque ut risus, enim nisl iaculis facilisis.
              </p>
            </div>
          </CardTwo>
      </Wrapper>
      <div className='btn'>
      <Button type={'primary'} width='200px'>Koproq korish</Button>
      </div>
    </Container>
  )
}

export default Xizmatlar