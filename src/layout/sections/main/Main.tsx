import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpeg'
import { FlexWrapper } from "../../../componens/menu/FlexWrapper";

export const Main = () => {
    return (
<div>
    <FlexWrapper >
    <div>
        <span>Hi There</span>
        <h2>I am Ksenia Baguzova</h2>
        <h1>A Web Developer</h1>
    </div>
    <Photo src={photo} alt=""/>
    </FlexWrapper>
</div>
    );
};

const Photo = styled.img`
width: 350px;
height:430px;
object-fit: cover;
`