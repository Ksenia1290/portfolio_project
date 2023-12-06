import React from "react";
import { Logo } from "../../componens/logo/Logo";
import { Container } from "../../componens/Container";
import { FlexWrapper } from "../../componens/FlexWrapper";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

const items =["Home","Skills","Work","Testimony","Contact"]


export const Header:React.FC  =() => {
    return (
    <S.Header>
        <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
            <Logo/>
            <DesktopMenu menuItems={items}/>
            <MobileMenu menuItems={items}/>
            </FlexWrapper>
        </Container>
    </S.Header>
    );
};


