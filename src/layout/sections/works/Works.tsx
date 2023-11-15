import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Menu } from "../../../componens/menu/Menu";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Work } from "./work/Work";

const worksItems =["ALL","LANDING PAGE","REACT","SPA"]

export const Works = () =>{
    return(
<StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper>
        <Work/>
        <Work/>
      </FlexWrapper>
</StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height:100vh;
    background-color: #deefff;
`