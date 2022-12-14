import React from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Container, Wrapper, WrapLeft, WrapRight } from './style'
import camp from '../../assets/img/camp_image.png'
import "swiper/css";
import "swiper/css/navigation";
import Button from '../../Generic/Button/index'


import { Navigation, Pagination, Mousewheel, Keyboard  } from "swiper";

export default function App() {
  return (
    <Container className="narxlar">
      <h1 className="description padding res_wrap">Biz xizmatlarimizni qanday narxlarda taqdim qilamiz?</h1>
      <Swiper 
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
      >
        {/* card1 */}
        <SwiperSlide className="card">
          <Wrapper>
            <WrapLeft>
              <h1 className="description res_wrap">Smm</h1>
              <h1 className="des_carusel">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <h2 className="small-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc</h2>
              <ul>
                <li className="list_item">Arcu ridiculus egestas eu nisl ultrices et.</li>
                <li className="list_item">Arcu ridiculus egestas ultrices et.</li>
                <li className="list_item">Arcu ridiculus egest.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
                <li className="list_item">Arcu ridiculus egestas eu nisl et.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
              </ul>
              <div className="price_wrap">
                <p className="price_item">Narx</p>
                <h2 className="description">2,500 UZD</h2>
              </div>
            </WrapLeft>
            <WrapRight>
              <img className="cam_img" src={camp} alt="" />
            </WrapRight>
          </Wrapper>
          <div className="btn">
            <Button width='200px' type={'primary'}>Xizmatda foydalanish</Button>
          </div>
        </SwiperSlide>
        {/* card2 */}
        <SwiperSlide className="card">
          <Wrapper>
            <WrapLeft>
            <h1 className="description res_wrap">Seo</h1>
              <h1 className="des_carusel">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <h2 className="small-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc</h2>
              <ul>
                <li className="list_item">Arcu ridiculus egestas eu nisl ultrices et.</li>
                <li className="list_item">Arcu ridiculus egestas ultrices et.</li>
                <li className="list_item">Arcu ridiculus egest.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
                <li className="list_item">Arcu ridiculus egestas eu nisl et.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
              </ul>
              <div className="price_wrap">
                <p className="price_item">Narx</p>
                <h2 className="description">2,500 UZD</h2>
              </div>
            </WrapLeft>
            <WrapRight>
              <img className="cam_img" src={camp} alt="" />
            </WrapRight>
          </Wrapper>
          <div className="btn">
            <Button width='200px' type={'primary'}>Xizmatda foydalanish</Button>
          </div>
        </SwiperSlide>
        {/* card3 */}
        <SwiperSlide className="card">
          <Wrapper>
            <WrapLeft>
            <h1 className="description res_wrap">Graphic design</h1>
              <h1 className="des_carusel">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <h2 className="small-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc</h2>
              <ul>
                <li className="list_item">Arcu ridiculus egestas eu nisl ultrices et.</li>
                <li className="list_item">Arcu ridiculus egestas ultrices et.</li>
                <li className="list_item">Arcu ridiculus egest.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
                <li className="list_item">Arcu ridiculus egestas eu nisl et.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
              </ul>
              <div className="price_wrap">
                <p className="price_item">Narx</p>
                <h2 className="description">2,500 UZD</h2>
              </div>
            </WrapLeft>
            <WrapRight>
              <img className="cam_img" src={camp} alt="" />
            </WrapRight>
          </Wrapper>
          <div className="btn">
            <Button width='200px' type={'primary'}>Xizmatda foydalanish</Button>
          </div>
        </SwiperSlide>
        {/* card4*/}
        <SwiperSlide className="card">
          <Wrapper>
            <WrapLeft>
            <h1 className="description res_wrap">Video production</h1>
              <h1 className="des_carusel">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <h2 className="small-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc</h2>
              <ul>
                <li className="list_item">Arcu ridiculus egestas eu nisl ultrices et.</li>
                <li className="list_item">Arcu ridiculus egestas ultrices et.</li>
                <li className="list_item">Arcu ridiculus egest.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
                <li className="list_item">Arcu ridiculus egestas eu nisl et.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
              </ul>
              <div className="price_wrap">
                <p className="price_item">Narx</p>
                <h2 className="description">2,500 UZD</h2>
              </div>
            </WrapLeft>
            <WrapRight>
              <img className="cam_img" src={camp} alt="" />
            </WrapRight>
          </Wrapper>
          <div className="btn">
            <Button width='200px' type={'primary'}>Xizmatda foydalanish</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <Wrapper>
            <WrapLeft>
            <h1 className="description res_wrap">Motion desgin</h1>
              <h1 className="des_carusel">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <h2 className="small-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc</h2>
              <ul>
                <li className="list_item">Arcu ridiculus egestas eu nisl ultrices et.</li>
                <li className="list_item">Arcu ridiculus egestas ultrices et.</li>
                <li className="list_item">Arcu ridiculus egest.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
                <li className="list_item">Arcu ridiculus egestas eu nisl et.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
              </ul>
              <div className="price_wrap">
                <p className="price_item">Narx</p>
                <h2 className="description">2,500 UZD</h2>
              </div>
            </WrapLeft>
            <WrapRight>
              <img className="cam_img" src={camp} alt="" />
            </WrapRight>
          </Wrapper>
          <div className="btn">
            <Button width='200px' type={'primary'}>Xizmatda foydalanish</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <Wrapper>
            <WrapLeft>
            <h1 className="description res_wrap">3D design animation</h1>
              <h1 className="des_carusel">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <h2 className="small-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc</h2>
              <ul>
                <li className="list_item">Arcu ridiculus egestas eu nisl ultrices et.</li>
                <li className="list_item">Arcu ridiculus egestas ultrices et.</li>
                <li className="list_item">Arcu ridiculus egest.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
                <li className="list_item">Arcu ridiculus egestas eu nisl et.</li>
                <li className="list_item">Arcu ridiculus egest..</li>
              </ul>
              <div className="price_wrap">
                <p className="price_item">Narx</p>
                <h2 className="description">2,500 UZD</h2>
              </div>
            </WrapLeft>
            <WrapRight>
              <img className="cam_img" src={camp} alt="" />
            </WrapRight>
          </Wrapper>
          <div className="btn">
            <Button width='200px' type={'primary'}>Xizmatda foydalanish</Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}