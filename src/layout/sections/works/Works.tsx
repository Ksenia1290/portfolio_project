import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Menu } from "../../../componens/menu/Menu";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from './../../../assets/images/social network.png'
import timerImg from './../../../assets/images/new york.png'



const worksItems =["ALL","LANDING PAGE","REACT","SPA"]

export const Works = () =>{
    return(
<StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper>
        <Work title={"Social Network"} 
              src={socialImg}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
        
        <Work title={"Timer"} 
              src={timerImg}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
      </FlexWrapper>
</StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height:100vh;
    background-color: #deefff;
`