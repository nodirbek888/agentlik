import styled from "styled-components";

const Container = styled.div`
    margin-top: 120px;
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
        }
        .res_wrap{
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
    }

    .price_item{
        font-weight: 400;
        font-size: 16px;
        font-family: 'Rubik', sans-serif;
        color: black;
    }
`
const WrapRight =styled.div`
    .cam_img{
        width: 550px;

        @media screen and (max-width:860px) {
            width: 300px;
        }
    }

    
`
export {Container,Wrapper,WrapLeft,WrapRight}