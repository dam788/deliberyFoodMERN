import styled from 'styled-components'
import { H1 } from './Title';
import { orange, magenta, gray, white} from './colors';

export const ContainerForm = styled.form`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const TitleForm = styled(H1)`
text-align: center;
`;

export const Box = styled.div`
width: 370px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`;

export const BoxForm = styled(Box)`
background-color: white;
padding: 10px;
border-radius: 6px;
width: 350px;
text-align: unset;
`;

export const LabelForm = styled.div`
margin: 10px 0 0 10px;
font-size: 14px;
color: ${gray};
`;

export const InputForm = styled.input`
width: 319px;
margin: 5px 10px;
height: 25px;
border: 1px solid lightgray;
padding: 5px;
border-radius: 4px;
`;

export const FormButton = styled.button`
transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
background: linear-gradient(135deg, ${orange} 0%, ${magenta} 100%);
padding: 15px;
margin: 20px 10px 10px 10px;
width: 330px;
border: none;
border-radius: 4px;
color: white;
cursor: pointer;
&:hover {
  filter: saturate(1.2);
  box-shadow: 0 3px 7px 0 rgb(0 0 0 / 9%);
}
&:active {
  transform: scale(0.98);
}
`;

export const BoxSapan = styled.span`
margin-top: 20px;
color: ${gray};
font-size: 14px;
`

export const BoldSapan = styled(BoxSapan)`
color: ${gray};
font-size: 14px;
font-weight: bolder;
&:hover {
  color: ${magenta}
}
`

export const ErrorMessageForm = styled.span`
  background-color: ${magenta};
  color: ${white};
  padding: 3px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  margin-top: 20px
`
