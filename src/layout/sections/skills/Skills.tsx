import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../componens/Container";

const skillData = [
{
   iconId: "code",
   title: "html5",
   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
},
{
   iconId: "css",
   title: "css3",
   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
},
{
   iconId: "react",
   title: "react",
   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
},
{
   iconId: "figma",
   title: "figma",
   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
},
{
   iconId: "typescript",
   title: "typescript",
   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
},
{
   iconId: "styledComponents",
   title: "styled Components",
   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
},
]

export const Skills = () => {
    return(
       <StyledSkills>
        <Container>
        <SectionTitle>My Skills</SectionTitle>
           <FlexWrapper wrap={"wrap"} justify={"space-between"}>
              
              {skillData.map ((s:{description:string,iconId:string,title:string}, index:number ) => {
               return  <Skill iconId = {s.iconId} key={index}
                              title={s.title} 
                              description={s.description}/>
              })}
           </FlexWrapper>
        </Container>
           
      </StyledSkills>
    );
};

const StyledSkills = styled.section`
`
