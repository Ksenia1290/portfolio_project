import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../componens/icon/Icon';
import { FlexWrapper } from '../../componens/FlexWrapper';

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
background-color: #ffd8a5;
min-height:20vh;

`
const Name = styled.span`

`

const SocialList = styled.ul`
display:flex;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`

const Copyright = styled.small`

`
