import React from "react";
import  styled  from "styled-components";
import { Logo } from "../../componens/logo/Logo";
import { Menu } from "../../componens/menu/Menu";
import { Container } from "../../componens/Container";
import { FlexWrapper } from "../../componens/FlexWrapper";


const items =["Home","Skills","Work","Testimony","Contact"]


export const Header =() => {
    return (
    <StyledHeader>
        <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
            <Logo/>
            <Menu menuItems={items}/> 
            </FlexWrapper>
        </Container>
    </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: #d4ffd3;
`
