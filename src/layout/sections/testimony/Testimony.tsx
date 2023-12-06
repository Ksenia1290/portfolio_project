import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Icon } from "../../../componens/icon/Icon";
import { Slider } from "../../../componens/slider/Slider";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Container } from "../../../componens/Container";
import {S} from '../skills/skills_Styles';

export const Testimony: React.FC =() => {
    return (
    <StyledTestimony>
        <Container>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
            <S.IconWrapper>
            <Icon iconId={"quoteAltRight"}/>
            </S.IconWrapper>
            <Slider/>
            </FlexWrapper>
        </Container>
    </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #aeb9ff;
    min-height:50vh;

    ${S.IconWrapper}{
        margin:40px 0 72px;
    }
`
