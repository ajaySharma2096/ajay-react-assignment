import styled from 'styled-components';

const Button = styled.button`
border: 10px;
box-sizing: border-box;
display: inline-block;
font-family: inherit;
cursor: pointer;
text-decoration: none;
margin: 0px;
padding: 0px;
outline: none;
line-height: 36px;
min-width: 88px;
color: rgba(255, 255, 255, 0.87);
border-radius: 2px;
user-select: none;
overflow: hidden;
text-align: center;
white-space: nowrap !important;
width: 200px !important;
height: 40px !important;
transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

background: ${(props) => (props.background ? props.background : 'rgb(79, 207, 100)')};
`;

export default Button;
