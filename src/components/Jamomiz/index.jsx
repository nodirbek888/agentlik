import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Conatiner,Wrapper} from './style'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from './Box'
// img:
import GulmiraImg from '../../assets/img/Gulmira.jpg'
import ShahriyorImg from '../../assets/img/Shahriyor.jpg'
import OgbekImg from '../../assets/img/Ogabek.jpg'
import DadaxonImg from '../../assets/img/Dadaxon.jpg'
import SuhrobImg from '../../assets/img/Suhrob.jpg'
import ArturImg from '../../assets/img/Artur.jpg'
import AsrorImg from '../../assets/img/Asror.jpg'
import JamshidImg from '../../assets/img/Jamshid.jpg'
import SherzodImg from '../../assets/img/Sherzod.jpg'
import { Pagination, Navigation } from "swiper";


export default function App() {
  return (
    <Conatiner className="jamomiz">
      <h1 className="description des_wrap">Bizning jamoa bilan tanishing</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={
          {
            0:{
              slidesPerView:1,
              spaceBetween:10,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:2,
              spaceBetween:10,
            },
            1024:{
              slidesPerView:2,
              spaceBetween:10,
            },
            1280:{
              slidesPerView:3,
              spaceBetween:10,
            }
          }
        }
      >
        <SwiperSlide>
          <Wrapper>
            <img className="carusel_img" src={OgbekImg} alt="img" />
            <div className="title_wrap">
              <h1 className="description">Alexsandr Rybak</h1>
              <p className="sub_title">Loyiha asoschisi</p>
              <p className="carusel_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis volutpat consectetur viverra aenean. At dolor id sed nibh.
              </p>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
          <img className="carusel_img" src={GulmiraImg} alt="img" />
            <div className="title_wrap">
              <h1 className="description">Alexsandr Rybak</h1>
              <p className="sub_title">Loyiha asoschisi</p>
              <p className="carusel_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis volutpat consectetur viverra aenean. At dolor id sed nibh.
              </p>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
          <img className="carusel_img" src={ArturImg} alt="img" />
            <div className="title_wrap">
              <h1 className="description">Alexsandr Rybak</h1>
              <p className="sub_title">Loyiha asoschisi</p>
              <p className="carusel_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis volutpat consectetur viverra aenean. At dolor id sed nibh.
              </p>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
          <img className="carusel_img" src={AsrorImg} alt="img" />
            <div className="title_wrap">
              <h1 className="description">Alexsandr Rybak</h1>
              <p className="sub_title">Loyiha asoschisi</p>
              <p className="carusel_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis volutpat consectetur viverra aenean. At dolor id sed nibh.
              </p>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
          <img className="carusel_img" src={DadaxonImg} alt="img" />
            <div className="title_wrap">
              <h1 className="description">Alexsandr Rybak</h1>
              <p className="sub_title">Loyiha asoschisi</p>
              <p className="carusel_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis volutpat consectetur viverra aenean. At dolor id sed nibh.
              </p>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
          <img className="carusel_img" src={SuhrobImg} alt="img" />
            <div className="title_wrap">
              <h1 className="description">Alexsandr Rybak</h1>
              <p className="sub_title">Loyiha asoschisi</p>
              <p className="carusel_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis volutpat consectetur viverra aenean. At dolor id sed nibh.
              </p>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
          <img className="carusel_img" src={ShahriyorImg} alt="img" />
            <div className="title_wrap">
              <h1 className="description">Alexsandr Rybak</h1>
              <p className="sub_title">Loyiha asoschisi</p>
              <p className="carusel_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis volutpat consectetur viverra aenean. At dolor id sed nibh.
              </p>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
          <img className="carusel_img" src={SherzodImg} alt="img" />
            <div className="title_wrap">
              <h1 className="description">Alexsandr Rybak</h1>
              <p className="sub_title">Loyiha asoschisi</p>
              <p className="carusel_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis volutpat consectetur viverra aenean. At dolor id sed nibh.
              </p>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
          <img className="carusel_img" src={JamshidImg} alt="img" />
            <div className="title_wrap">
              <h1 className="description">Alexsandr Rybak</h1>
              <p className="sub_title">Loyiha asoschisi</p>
              <p className="carusel_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis volutpat consectetur viverra aenean. At dolor id sed nibh.
              </p>
            </div>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
      <Box/>
    </Conatiner>
  );
}