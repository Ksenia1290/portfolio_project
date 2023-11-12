import React from "react";
import  styled  from "styled-components";
import { Logo } from "../../componens/logo/Logo";
import { Menu } from "../../componens/menu/Menu";

export const Header =() => {
    return (
    <StyledHeader>
        <Logo/>
        <Menu/>
    </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: #d4ffd3;
`
