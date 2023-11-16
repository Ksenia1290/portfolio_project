import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Icon } from "../../../componens/icon/Icon";
import { Slider } from "../../../componens/slider/Slider";
import { FlexWrapper } from "../../../componens/FlexWrapper";

export const Testimony =() => {
    return (
        <StyledTestimony>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
        <Icon iconId={"quoteAltRight"}/>
        <Slider/>
        </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #aeb9ff;
    min-height:50vh;
`