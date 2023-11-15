import React from "react";
import  styled  from "styled-components";
import { Logo } from "../../componens/logo/Logo";
import { Menu } from "../../componens/menu/Menu";


const items =["Home","Skills","Work","Testimony","Contact"]


export const Header =() => {
    return (
    <StyledHeader>
        <Logo/>
        <Menu menuItems={items}/>
    </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: #d4ffd3;
display:flex;
justify-content:space-between;
`
