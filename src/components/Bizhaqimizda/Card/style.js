import styled from "styled-components";
import { ReactComponent as user } from "../../../assets/icon/user_icon.svg";
import { ReactComponent as settings } from "../../../assets/icon/settings_icon.svg";
import { ReactComponent as reliable } from "../../../assets/icon/reliable.svg";
import { ReactComponent as hourglass } from "../../../assets/icon/hourglass_icon.svg";
import { ReactComponent as energi } from "../../../assets/icon/energi_icon.svg";
import { ReactComponent as award } from "../../../assets/icon/award_icon.svg";

const Container = styled.div`
    width: 100%;
    height:fit-content; 
    display: flex;
    flex-direction: column;
    padding: 10px 150px;
        
    .des_wrap{
        margin-bottom:30px ;

        @media screen and (max-width:550px) {
            width: 200px;
        }
    }

    @media screen and (max-width:1116px) {
        align-items: center;
        justify-content: center;
        display: flex;
        text-align: center;
    }

    @media screen and (max-width:550px) {
        padding: 0px;
    }
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    width: fit-content;
    flex-wrap: wrap;

    @media screen and (max-width:1116px) {
        /* flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 5px; */
        justify-content: center;
    }
`


const Cards = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
    @media screen and (max-width:550px) {
        width: 200px;
    }
`

const Icon = styled.img``
Icon.User = styled(user)`
    width: 80px;
    margin-bottom: -20px;
`

Icon.Setting = styled(settings)`
    width: 80px;
    margin-bottom: -20px;
`

Icon.Reliable = styled(reliable)`
    width: 80px;
    margin-bottom: -20px;
`
Icon.Hourglass = styled(hourglass)`
    width: 80px;
    margin-bottom: -20px;
`

Icon.Energi = styled(energi)`
    width: 80px;
    margin-bottom: -20px;
`
Icon.Award = styled(award)`
    width: 80px;
    margin-bottom: -20px;
`

export {Container,Wrapper,Cards,Icon}