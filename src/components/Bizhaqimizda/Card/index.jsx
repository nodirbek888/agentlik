import React from 'react'
import { Container, Wrapper,Cards,Icon} from './style'
const Card = () => {
  return (
    <Container>
      <h1 className='description des_wrap'>Nima uchun  aynan BekAgency ?</h1>
        <Wrapper>
            <Cards>
              <Icon.User/>
              <h1 className='description'>Lorem ipsum</h1>
              <p className='small-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat rutrum eget.</p>
            </Cards>
            <Cards>
              <Icon.Setting />
              <h1 className='description'>Lorem ipsum</h1>
              <p className='small-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat rutrum eget.</p>
            </Cards>
            <Cards>
              <Icon.Setting />
              <h1 className='description'>Lorem ipsum</h1>
              <p className='small-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat rutrum eget.</p>
            </Cards>
{/* Wrapper2 */}
            <Cards>
              <Icon.Hourglass/>
              <h1 className='description'>Lorem ipsum</h1>
              <p className='small-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat rutrum eget.</p>
            </Cards>
            <Cards>
              <Icon.Energi />
              <h1 className='description'>Lorem ipsum</h1>
              <p className='small-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat rutrum eget.</p>
            </Cards>
            <Cards>
              <Icon.Award />
              <h1 className='description'>Lorem ipsum</h1>
              <p className='small-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat rutrum eget.</p>
            </Cards>
        </Wrapper>
    </Container>
  )
}

export default Card
