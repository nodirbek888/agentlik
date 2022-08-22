import styled from "styled-components";

const Conatiner = styled.div`
    width: 100%;
    margin-top: 120px;
    padding: 0px 10px;
    .swiper{
        height: 810px;
    }

    .swiper-pagination{
    top: 780px;
    justify-content: space-between;
    }

    .swiper-slide{
    width: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .swiper-button-next{
        @media screen and (max-width:875px) {
            display: none;
        }
    }

    .swiper-button-prev{
        @media screen and (max-width:875px) {
            display: none;
        }
    }

    .des_wrap{
        padding: 0px 60px;

        @media screen and (max-width:1116px){
            text-align: center;
        }    
    }
`
const Wrapper = styled.div`
    width: 320px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

        

    .title_wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0px 10px;
        gap: 10px;
    }

    .carusel_img{
        width: 100%;
        /* height: 320px; */
    }
    
`

export {Conatiner,Wrapper}