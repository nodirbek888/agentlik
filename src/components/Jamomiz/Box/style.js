import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 0px 40px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width:1920px) {
        padding: 0px 250px;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    background: linear-gradient(92.14deg, #E148B4 -24.83%, #3C11B7 63.89%);
    border-radius: 20px;

    @media screen and (max-width:1116px) {
        display: flex;    
        text-align: center;
        flex-direction: column;
    }
    @media screen and (max-width:770px){
        gap: 0;
        align-items: center;
    } 
`

const WrapLeft = styled.div`
    /* width: 700px; */
`
const WrapRight = styled.div``

export {Container,Wrapper,WrapLeft,WrapRight}