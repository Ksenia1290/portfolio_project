import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpeg'
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Container } from "../../../componens/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
    return (
<StyledMain>
    <Container>
    <FlexWrapper align={"center"} justify={"space-between"}>
    <div>
        <Smalltext>Hi There</Smalltext>
        <Name>I am <span>Ksenia Baguzova</span></Name>
        <MainTitle>A Web Developer</MainTitle>
    </div>
    <Photo src={photo} alt=""/>
    </FlexWrapper>
    </Container>
    
</StyledMain>
    );
};

const StyledMain = styled.div`
min-height:100vh;
background-color:#1f2d41;
display:flex;
`

const Photo = styled.img`
width: 350px;
height:430px;
object-fit: cover;
`
const MainTitle = styled.h1`
font-size: 27px;
font-weight: 400;
`
const Name = styled.h2`
font-family: Josefin Sans, sans-serif;
font-size: 50px;
font-weight: 700;
letter-spacing: 2.5px;
margin:10px 0;

span{

    position:relative;

   &::before {
    content:"";
    display:inline-block;
    width:100%;
    height:20px;
    background-color:${theme.colors.accent};

    position:absolute;
    bottom: 0;
   }
}
`
const Smalltext = styled.h2`
font-size: 14px;
font-weight: 400;
`
