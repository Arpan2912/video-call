import styled from "styled-components";

export const GradiantButton = styled.input.attrs(props => ({
    type: "button",
    width: props.width || "200px",
    height: props.height || "50px",
    fontSize: props.fontSize || "31px",
  }))`
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    border-radius: 50px;
    border: none;
    outline: 0;
    background: transparent linear-gradient(98deg, #FF9200 0%, #FF3100 100%) 0% 0% no-repeat padding-box;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    &:hover{
        background: transparent;
        border: 2px solid #FF8300;
    }
`;

export const TransparentButton = styled.input.attrs(props => ({
  type: "button",
  width: props.width || "200px",
  height: props.height || "50px",
  fontSize: props.fontSize || "31px",
}))`
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: ${props => props.fontSize};
  border-radius: 50px;
  border: none;
  outline: 0;
  background: transparent;
  color: white;
  text-transform: uppercase;
  border: 2px solid #FF8300;
  font-weight: bold;
  &:hover{
      background: transparent linear-gradient(98deg, #FF9200 0%, #FF3100 100%) 0% 0% no-repeat padding-box;
      border: none;
  }
`;


export const FormInput = styled.input.attrs(props => ({
  type: "text",
  width: props.width || "200px",
  height: props.height || "50px",
  fontSize: props.fontSize || "31px",
  paddingLeft: props.paddingLeft || "20px"
}))`
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: ${props => props.fontSize};
  padding-left: ${props => props.paddingLeft};
  border-radius: 50px;
  border: none;
  outline: 0;
  background: #262839;
  color: white;
  &:focus{
    border: 2px solid #4E5165;
  }
  &::placeholder{
    color: #4E5165;
  }
`;

export const P = styled.p.attrs(props => ({
  fontSize: props.fontSize || "14px",
  color: props.color || "#4e5165",
  fontWeight: props.fontWeight || "normal",
  uppercase: props.uppercase || "none"
}))`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  margin-bottom: 0px;
  text-transform: ${props => props.uppercase};
`;


