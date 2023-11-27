import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../componens/icon/Icon';
import { FlexWrapper } from '../../componens/FlexWrapper';
import { theme } from '../../styles/Theme';

export const Footer = () => {
    return(
     <StyledFooter>
        <FlexWrapper direction={"column"} align={"center"}>
        <Name>Ksenia</Name>
       <SocialList>
         <SocialItem>
          <SocialLink>
             <Icon height={"21px"}  viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
          </SocialLink>
          <SocialLink>
             <Icon height={"21px"}  viewBox={"0 0 21px 21px"}  iconId={"linkedin"}/>
          </SocialLink>
          <SocialLink>
             <Icon height={"21px"}  viewBox={"0 0 21px 21px"}  iconId={"telegram"}/>
          </SocialLink>
          <SocialLink>
             <Icon height={"21px"}  viewBox={"0 0 21px 21px"}  iconId={"vkontakte"}/>
          </SocialLink>
         </SocialItem>
      </SocialList>
        <Copyright>© 2023 Ksenia Baguzova, All Rights Reserved.</Copyright>
        </FlexWrapper>
      
     </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: ${theme.colors.primeryBg};
padding: 40px 0;

`
const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: 3px;
`

const SocialList = styled.ul`
display:flex;
gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`

const Copyright = styled.small`
text-align: center;
font-size: 12px;
font-weight: 400;
opacity: 0.5;
`
