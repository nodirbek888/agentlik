import styled from "styled-components";
import back from '../../assets/img/background.png'

const Container = styled.div`
    width: 100%;
    height: fit-content;
.wrapper{
    width: 100%;
    height: fit-content;
    background-image:url(${back});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat, repeat;
    display: flex;
    flex-direction: column;
}

.cards{
    margin-top: 120px;
}
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 0px 150px;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width:1116px) {
        display: flex;    
        text-align: center;
        flex-direction: column;
    }

    @media screen and (max-width:550px) {
        padding: 0px 0px;
    }
`

const WrapLeft =styled.div`
    margin-bottom: 100px;   
    width: 500px;
    .btn_wrap{
        display: flex;
        gap: 10px;
        margin-top: 20px;

        @media screen and (max-width:550px){
            flex-direction: column;
            margin-top: 30px;
        }
    }

    .res_wrap{
        @media screen and (max-width:550px){
            width: 250px;
        }
    }

    @media screen and (max-width:1116px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 0px;
    }

    @media screen and (max-width:550px){
        width: 350px;
        align-items: center;
    } 

`

const WrapRight =styled.div`
    width: 100%;
    .img_tel{
        width: 650px;
        @media screen and (max-width:1116px) {
            width: 500px;
        }

        @media screen and (max-width:550px){
        width: 300px;
        }
    }

    @media screen and (max-width:1116px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export {Container,Wrapper,WrapLeft,WrapRight}