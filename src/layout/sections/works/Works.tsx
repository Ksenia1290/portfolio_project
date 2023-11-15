import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";

export const Works = () =>{
    return(
<StyledWorks>
      <SectionTitle>My Works</SectionTitle>
</StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height:100vh;
    background-color: #deefff;
`