import React from "react";
import styled from "styled-components";
import { Icon } from "../../../componens/icon/Icon";
import { SectionTitle } from "../../../componens/SectionTitle";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Skill } from "./skill/Skill";

export const Skills = () => {
    return(
       <StyledSkills>
           <SectionTitle>My Skills</SectionTitle>
           <FlexWrapper>
              <Skill iconId = {"code"} title={"html5"}/>
              <Skill iconId = {"css"} title={"css"}/>
              <Skill iconId = {"react"} title={"react"}/>
              <Skill iconId = {"figma"} title={"figma"}/>
              <Skill iconId = {"typescript"} title={"typescript"}/>
              <Skill iconId = {"styledComponents"} title={"styledComponents"}/>
           </FlexWrapper>
      </StyledSkills>
    );
};

const StyledSkills = styled.section`
background-color: #ffe5e4;
min-height: 100vh;
`