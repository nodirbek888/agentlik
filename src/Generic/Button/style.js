import styled from 'styled-components';

const getType = (type) => {
	switch (type) {
		case 'primary':
		return { userSelect:'none', background: '#E148B4',  color: '#ffffff', border: 'none', borderRadius:'50px',fontFamily: "'Rubik', sans-serif"
	};
		case 'secondary':
			return { border: '3px solid #E148B4', background:'transparent', color: '#ffffff',borderRadius:'50px' ,fontFamily: "'Rubik', sans-serif"};
		default:
			return {
				border: '1px solid black',
				color: '#ffffff',
				background: 'transparent',
				borderRadius:'50px'
			};
	}
};

const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-style: normal;
	font-weight: 400;
	border-radius: 2px;
    font-family: 'Rubik', sans-serif;
	font-size: 14px;
	line-height: 20px;
	width: ${({ width }) => (width ? width : 'auto')};
	height: ${({ height }) => height || '44px'};
	margin-top: ${({ mt }) => `${mt}px`};
	margin-bottom: ${({ mb }) => `${mb}px`};
	margin-right: ${({ mr }) => `${mr}px`};
	margin-left: ${({ ml }) => `${ml}px`};
	${({ type }) => getType(type)}
	cursor: pointer;
	:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;

export { Container };	