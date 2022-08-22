import styled from "styled-components";

const Container = styled.div`
    margin-top: 120px;

    .swiper{
        height: 600px;
        @media screen and (max-width:820px) {
            height: 700px;
        }
    }
    .swiper-pagination{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card{
        width: 100%;
        height: fit-content;
        margin-top: 40px;
        width: 100%;
        /* height: 500px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .btn{
            margin-top: 50px;

            @media screen and (max-width:820px) {
            margin-top: 20px;
            }
        }
    }
    .padding{
     padding: 0px 150px;
    }

    .res_wrap{
        @media screen and (max-width:1116px) {
            text-align: center;
            padding: 0px;
        }
    }

    .swiper-button-next{
        @media screen and (max-width:570px) {
            display: none;
        }
    }

    .swiper-button-prev{
        @media screen and (max-width:570px) {
            display: none;
        }
    }
`

const Wrapper = styled.div`
    width: 100%;
    padding: 0px 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width:1116px) {
        padding: 0px 70px;
    }

    @media screen and (max-width:820px) {
            flex-direction: column;
            text-align: center;
            padding: 0px 70px;
    }
    @media screen and (min-width:1920px) {
        padding: 0px 250px;
    }
`
const WrapLeft =styled.div`
    width: 350px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .list_item{
        font-weight: 400;
        font-size: 16px;
        font-family: 'Rubik', sans-serif;
        color: black;
        margin-left: 20px;

        @media screen and (max-width:820px) {
            list-style-type: none;
        }
    }

    .price_wrap{
        margin-top: 70px;
        @media screen and (max-width:820px) {
        margin-top: 10px;
        }
    }

    .price_item{
        font-weight: 400;
        font-size: 16px;
        font-family: 'Rubik', sans-serif;
        color: black;
    }

    @media screen and (max-width:820px) {
        order: 2;
    }
`
const WrapRight =styled.div`
    .cam_img{
        width: 550px;

        @media screen and (max-width:1050px) {
            width: 400px;
        }

        @media screen and (max-width:860px) {
            order: 1;
            width: 300px;
        }
    }

    
`
export {Container,Wrapper,WrapLeft,WrapRight}