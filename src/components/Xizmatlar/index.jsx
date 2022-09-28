import React from 'react'
import Button from '../../Generic/Button'
import {Container,Wrapper,CardOne,CardTwo} from './style'

const Xizmatlar = () => {
  return (
    <Container className='xizmatlar'>
      <h1 className='description des_wrap'>Xozir olib borilayotgan va tugatilga xizmatlar bilan tanishing</h1>
      <Wrapper>
          <CardOne>
            <h1 className='description_white'>Eco Motors Elektromobillar avtosaloni</h1>
            <div className='result_wrap'>
              <h2 className='sub-title_white'>Kuzatuvchilar</h2>
              <h1 className='description_white'>1377</h1>
              <p className='small-description_white'>1oyda</p>
            </div>
            <div className='result_wrap'>
            <h2 className='sub-title_white'>Ko'rishlar soni</h2>
              <h1 className='description_white'>764</h1>
              <p className='small-description_white'>odam</p>
            </div>
            <div className='result_wrap'>
            <h2 className='sub-title_white'>Sotuv</h2>
              <h1 className='description_white'>+30%</h1>
            </div>  
          </CardOne>

          <CardOne>
            <h1 className='description_white'>Binary International University in Urgench </h1>
            <div className='result_wrap'>
              <h2 className='sub-title_white'>Kuzatuvchilar</h2>
              <h1 className='description_white'>656</h1>
              <p className='small-description_white'>1oyda</p>
            </div>
            <div className='result_wrap'>
            <h2 className='sub-title_white'>Ko'rishlar soni</h2>
              <h1 className='description_white'>5 000 </h1>
              <p className='small-description_white'>1oyda</p>
            </div>
            <div className='result_wrap'>
            <h2 className='sub-title_white'>Samaradorlik</h2>
              <h1 className='description_white'>152</h1>
              <p className='small-description_white'>odam</p>
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