import React from "react";
import { Logo } from "../../componens/logo/Logo";
import { Container } from "../../componens/Container";
import { FlexWrapper } from "../../componens/FlexWrapper";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

const items =["Home","Skills","Work","Testimony","Contact"]


export const Header:React.FC  =() => {

const [width,setWidth]= React.useState(window.innerWidth);
const breakpoint=768;

React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

    return (
    <S.Header>
        <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
            <Logo/>

            {width < breakpoint ? <MobileMenu menuItems={items}/> 
                                : <DesktopMenu menuItems={items}/>}
           
            </FlexWrapper>
        </Container>
    </S.Header>
    );
};


