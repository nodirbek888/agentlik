import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0px 150px;
    margin-top: 120px;

    @media screen and (max-width:1116px){
        padding: 0px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } 

    @media screen and (min-width:1920px) {
        padding: 0px 250px;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 20px;

    @media screen and (max-width:1116px){
        display: flex;
        align-items: center;
        justify-content: center;
    } 
`

const Card = styled.div`
    width: 320px;
    height: 200px;
    background-color: #D9D9D9;
`

export {Container,Wrapper,Card}