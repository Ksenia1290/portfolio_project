import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../componens/icon/Icon";
import { SectionTitle } from "../../../componens/SectionTitle";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Skill } from "./skill/Skill";

export const Slills = () => {
    return(
       <StyledSkills>
           <SectionTitle>My Skills</SectionTitle>
           <FlexWrapper>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
           </FlexWrapper>
      </StyledSkills>
    );
};

const StyledSkills = styled.section`
`