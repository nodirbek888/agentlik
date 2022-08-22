import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 120px;
    gap: 90px;
    padding: 10px 150px;

    @media screen and (max-width:1116px) {
            justify-content: center;
            padding: 0px 10px;
    }

    @media screen and (min-width:1920px) {
        padding: 0px 250px;
    }

    
    .btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .des_wrap{
        @media screen and (max-width:1116px){
            text-align: center;
        } 
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;

    @media screen and (max-width:1116px){
        padding: 0px 20px;
        display: flex;
        /* align-items: center; */
        justify-content: center;
    } 
`

const CardOne = styled.div`
    width: 330px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 40px;
    min-height: 470px;
    background: linear-gradient(139.55deg, #A81F36 29.48%, #FF002B 95.11%);
    border-radius: 20px ;

    .result_wrap{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
`

const CardTwo = styled.div`
    width: 330px;
    height: fit-content;
    min-height: 470px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 40px;
    background: linear-gradient(139.55deg, #321B76 29.49%, #4500FF 100%);
    border-radius: 20px;
    .cardtwo_wrap{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`
export {Container,Wrapper,CardOne,CardTwo}