import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../componens/icon/Icon";

export const Slills = () => {
    return(
       <StyledSkills>
           <SectionTitle>My Skills</SectionTitle>
           <FlexWrapper>
              <Skills>
                  <Icon iconId={"code"}/>
                  <SkillTitle>HTML5</SkillTitle>
                  <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim</SkillText>
              </Skills>
           </FlexWrapper>
      </StyledSkills>
    );
};

const StyledSkills = styled.section`
`