import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../componens/icon/Icon';

export const Footer = () => {
    return(
     <StyledFooter>
      <Name>Ksenia</Name>
       <SocialList>
         <SocialItem>
          <SocialLink>
             <Icon iconId={"instagram"}/>
          </SocialLink>
          <SocialLink>
             <Icon iconId={"linkedin"}/>
          </SocialLink>
          <SocialLink>
             <Icon iconId={"telegram"}/>
          </SocialLink>
          <SocialLink>
             <Icon iconId={"vkontakte"}/>
          </SocialLink>
         </SocialItem>
      </SocialList>
        <Copyright>© 2023 Ksenia Baguzova, All Rights Reserved.</Copyright>
     </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const Name = styled.span`

`

const SocialList = styled.ul`

`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`

const Copyright = styled.small`

`
