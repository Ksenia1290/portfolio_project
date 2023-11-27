import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Icon } from "../../../componens/icon/Icon";
import { Slider } from "../../../componens/slider/Slider";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";

export const Testimony =() => {
    return (
        <StyledTestimony>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
        <Icon iconId={"quoteAltRight"}/>
        </IconWrapper>
        
        <Slider/>
        </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #aeb9ff;
    min-height:50vh;

    ${IconWrapper}{
        margin:40px 0 72px;
    }
`