import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpeg'
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Container } from "../../../componens/Container";
import {S} from './Main_Styles';

export const Main: React.FC = () => {
    return (
<S.Main>
    <Container>
    <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
    <div>
        <S.Smalltext>Hi There</S.Smalltext>
        <S.Name>I am <span>Ksenia Baguzova</span></S.Name>
        <S.MainTitle>A Web Developer</S.MainTitle>
    </div>
    <S.PhotoWrapper>
    <S.Photo src={photo} alt=""/>
    </S.PhotoWrapper>
    </FlexWrapper>
    </Container>
</S.Main>
    );
};

