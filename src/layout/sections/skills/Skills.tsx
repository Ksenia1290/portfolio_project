import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../componens/Container";

export const Skills = () => {
    return(
       <StyledSkills>
        <Container>
        <SectionTitle>My Skills</SectionTitle>
           <FlexWrapper wrap={"wrap"} justify={"space-between"}>
              <Skill iconId = {"code"} title={"html5"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId = {"css"} title={"css"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId = {"react"} title={"react"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId = {"figma"} title={"figma"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId = {"typescript"} title={"typescript"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
              <Skill iconId = {"styledComponents"} title={"styledComponents"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
           </FlexWrapper>
        </Container>
           
      </StyledSkills>
    );
};

const StyledSkills = styled.section`

`