import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Button } from "../../../componens/Button";
import { Container } from "../../../componens/Container";
import { FlexWrapper } from "../../../componens/FlexWrapper";

export const Slogan: React.FC = () => {
    return(
     <StyledSlogan>
        <Container>
            <FlexWrapper direction={"column"} align={"center"}>
            <SectionTitle>
            I Am Available For Feelance
        </SectionTitle>
        <Button>Hire me</Button>
            </FlexWrapper>
        </Container>
     </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #f89e9e;
`
