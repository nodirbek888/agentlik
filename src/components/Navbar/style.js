import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { ReactComponent as navlogo } from "../../assets/icon/Logo.svg";
import { ReactComponent as navMenu } from "../../assets/icon/Menu.svg";
import { ReactComponent as xmenu } from "../../assets/icon/Xmenu.svg";
import { ReactComponent as telegram } from "../../assets/icon/tlegem_icon.svg";
import { ReactComponent as youtube } from "../../assets/icon/youtube_icon.svg";
import { ReactComponent as instagram } from "../../assets/icon/instagram_icon.svg";


const Container = styled.div`
	position: fixed;	
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1000;
`;

const Header = styled.header`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	padding: 0px 150px;
	justify-content: space-between;
	background: linear-gradient(98.73deg, #3C11B7 48.56%, #E148B4 116.62%);
	-webkit-touch-callout: none; //IOS safari
	-webkit-user-select: none; //safari
	-khtml-user-select: none; //Konqueror HTML
	-moz-user-select: none; //firefox old version
	-ms-user-select: none; // internet explorer/ Edge
	user-select: none;

	@media screen and (max-width:1116px) {
		padding: 0px 20px;
    }
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1440px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	width: 100%;
	color: #ffffff;
	@media (max-width: 980px) {
		/* padding: 0 20px; */
	}
	button {
		padding: 15px 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		display: inline-block;
		font-weight: 600;
		border-radius: 2px;
		font-size: 14px;
		background: linear-gradient(96.73deg, #3C11B7 48.56%, #E148B4 116.62%);
		border: none;
		transition-duration: 0.5s;
		&:hover {
			background-color: #212529;
		}
		@media (max-width: 750px){
			padding: 10px 10px;
		}
	}
`;

const LinkSection = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	.active {
		color: blue;
	}
`;

LinkSection.Body = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	transition: all 0.4s ease 0s;
	&:hover{
		color: red;
	}
	@media (max-width: 980px) {
		position: fixed;
		width: 50%;
		height:100%;
		padding: 110px 0px 0px 30px;
		top: 0;
		flex-direction: column;
		overflow: auto;
		opacity: 0;
		visibility: hidden;
		background: linear-gradient(96.73deg, #3C11B7 48.56%, #E148B4 116.62%);
		left: 0;
		display: flex;
		align-items: flex-start;
		/* justify-content: center; */
		&.open {
			opacity: 1;
			visibility: visible;
		}
	}
	@media screen and (max-width:980px) {
		background: rgba(0, 0, 0, 0.96);
    }
`;

const Navlink = styled.a`
	text-decoration: none;
	display: inline-block;
	color: white;
	cursor: pointer;
`;

const Navlogo = styled(navlogo)`
	text-align: center;
	width: 120px;
	@media (max-width: 980px) {
		display: none;
	}
`;
const NavMenu = styled(navMenu)`
	display: none;
	cursor: pointer;
	position: relative;
	z-index: 100;
	@media (max-width: 980px) {
		display: flex;
	}
`;
const Xmenu = styled(xmenu)`
	display: none;
	position: relative;
	z-index: 100;
	cursor: pointer;
	@media (max-width: 980px) {
		display: flex;
	}
`;

const Cantacts = styled.div`
	display: flex;
	flex-direction: column;
	.tel{
		text-decoration: none;
	}
	@media (max-width: 980px){
			display: none;
	}
`
const Icon = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	display: none;

	@media (max-width: 980px){
		display: flex;
	}
`
Icon.Telegram = styled(telegram)`
	width:30px;
`
Icon.Youtube = styled(youtube)`
	width:30px;
`
Icon.Instagram = styled(instagram)`
	width:30px;
`

export { Container,Icon, Header, Navlink, Wrapper, LinkSection, Navlogo, NavMenu, Xmenu ,Cantacts};