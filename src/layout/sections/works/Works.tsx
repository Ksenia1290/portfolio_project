import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from './../../../assets/images/social network.png'
import timerImg from './../../../assets/images/new york.png'
import { Container } from "../../../componens/Container";
import { TabMenu } from "./tabMenu/TabMenu";



const worksItems =["ALL","LANDING PAGE","REACT","SPA"]

export const Works = () =>{
    return(
<StyledWorks>
     <Container>
     <SectionTitle>My Works</SectionTitle>
      <TabMenu menuItems={worksItems}/>
      <FlexWrapper justify={"space-between"} align={"flex-statr"}>
        <Work title={"Social Network"} 
              src={socialImg}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
        
        <Work title={"Timer"} 
              src={timerImg}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
      </FlexWrapper>
     </Container>
</StyledWorks>
    );
};

const StyledWorks = styled.section`

`
