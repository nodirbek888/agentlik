import styled from "styled-components";
import { ReactComponent as telegram } from "../../assets/icon/tlegem_icon.svg";
import { ReactComponent as youtube } from "../../assets/icon/youtube_icon.svg";
import { ReactComponent as instagram } from "../../assets/icon/instagram_icon.svg";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0px 150px;
    background: linear-gradient(102.16deg, #3C11B7 46.09%, #E148B4 128.87%);
    margin-top: 120px;

    @media screen and (min-width:1920px) {
        padding: 0px 250px;
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding: 50px 0px;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;

    
    @media screen and (max-width:1116px) {
        display: flex;    
        text-align: center;
        justify-content: center;
        gap: 40px;
        align-items: center;
        flex-direction: column;
    }

    `
const WrapLeft = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .img_like{
        position: relative;
        right: 120px;
        width: 450px;
        @media screen and (max-width:620px) {
            width: 300px;
            position: relative;
            right: 10px;
        }
    }

    @media screen and (max-width:1116px) {
        order: 2;
    }

    .communication{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .communication_item{
        display: flex;
        align-items: center;
        gap: 10px;

        @media screen and (max-width:1116px) {
            margin-top: 10px;
            justify-content: center;
        }
    }

    .text_decoration{
        text-decoration: none;
    }
    `

const Icon = styled.div``
Icon.Telegram = styled(telegram)`
    width:40px;
`
Icon.Instagram = styled(instagram)`
    width:40px;
`
Icon.Youtube = styled(youtube)`
    width:40px;
`

const WrapRight = styled.div`
    width: 650px;
    height: fit-content;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    text-align: center;
    padding: 50px 50px;
    border-radius: 20px;

    .des_wrap{
        color: #9D9D9D;
        font-size: 16px;
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        line-height: 25px;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media screen and (max-width:1116px) {
        order: 1;
    }

    @media screen and (max-width:1116px) {
        width: 550px;
    }

    @media screen and (max-width:580px) {
        width: 400px;
        padding: 30px 50px;
    }

    @media screen and (max-width:440px) {
        width: 350px;
    }
`

export {Container,Wrapper,WrapLeft,WrapRight,Icon}