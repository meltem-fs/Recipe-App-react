import styled from 'styled-components';

const LoginStyle = styled.div`
background-color: yellowgreen;
width: 20rem;
padding: 4rem;
border-radius: 30%;
margin: 10rem auto;
border:2px solid yellow;
`;
export default LoginStyle;

export const LabelStyle =styled.label`
color: yellow;
display: inline-block;
margin-bottom: 1rem;

`
export const ButtonStyle =styled.button`
color: green;
margin-top: 2rem;
padding:0.5rem 1rem;
border-radius: 10px;
border: none;
cursor: pointer;
&:hover{
    transform: scale(1.1);
}
`
export const Inputstyle = styled.input`
padding: 1rem 3rem; 
border-radius: 10px;
border-color: yellow;
`
