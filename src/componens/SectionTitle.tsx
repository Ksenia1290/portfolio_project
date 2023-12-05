import styled from "styled-components"
import { theme } from "../styles/Theme"
import { font } from "../styles/Common"

export const SectionTitle = styled.h2`
//{font({family,weight,color,lineHeight,Fmin,Fmax}: {family: "'Josefin Sans', sans-serif",font-weight: 600,})};


text-align: center;
font-family: Josefin Sans,sans-serif;
font-size: 36px;
font-weight: 600;
letter-spacing: 5px;
margin-bottom: 90px;

position: relative;

&::before{
    content:"";
    display: inline-block;
    width:55px;
    height:1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
}
`