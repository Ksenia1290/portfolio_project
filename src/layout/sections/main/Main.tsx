import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpeg'
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Container } from "../../../componens/Container";

export const Main = () => {
    return (
<StyledMain>
    <Container>
    <FlexWrapper align={"center"} justify={"space-between"}>
    <div>
        <Smalltext>Hi There</Smalltext>
        <Name>I am Ksenia Baguzova</Name>
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
`
const Name = styled.h2`
font-family: Josefin Sans, sans-serif;
font-size: 50px;
font-weight: 700;
letter-spacing: 2.5px;
`
const Smalltext = styled.h2`
font-size: 14px;
font-weight: 400;
`
