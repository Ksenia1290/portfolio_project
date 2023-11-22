import React from "react";
import  styled  from "styled-components";
import { Logo } from "../../componens/logo/Logo";
import { Container } from "../../componens/Container";
import { FlexWrapper } from "../../componens/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";


const items =["Home","Skills","Work","Testimony","Contact"]


export const Header =() => {
    return (
    <StyledHeader>
        <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
            <Logo/>
            <HeaderMenu menuItems={items}/> 
            </FlexWrapper>
        </Container>
    </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: rgba(31,31,0.9);
padding:20px,0;
position:fixed;
top:0;
left:0;
right:0;
z-index:99999;
`
