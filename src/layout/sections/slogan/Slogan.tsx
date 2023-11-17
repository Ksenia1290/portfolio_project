import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Button } from "../../../componens/Button";

export const Slogan = () => {
    return(
     <StyledSlogan>
        <SectionTitle>
            I Am Available For Feelance
        </SectionTitle>
        <Button>Hire me</Button>
     </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #f89e9e;
`