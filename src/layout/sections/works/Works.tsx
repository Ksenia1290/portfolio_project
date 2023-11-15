import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Menu } from "../../../componens/menu/Menu";
import { FlexWrapper } from "../../../componens/FlexWrapper";

const worksItems =["ALL","LANDING PAGE","REACT","SPA"]

export const Works = () =>{
    return(
<StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper></FlexWrapper>
</StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height:100vh;
    background-color: #deefff;
`