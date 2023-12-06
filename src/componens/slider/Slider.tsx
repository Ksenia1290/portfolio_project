import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
            <Slide>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                <Name>@ivan ivanow</Name>
             </Slide>
            </FlexWrapper>
             <Pagination>
              <span> </span>
              <span className={"active"}></span>
              <span> </span>
             </Pagination>
        </StyledSlider>
    );
};

