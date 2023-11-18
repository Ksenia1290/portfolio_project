import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../componens/icon/Icon';

export const Footer = () => {
    return(
     <StyledFooter>
        <Name>Ksenia</Name>
        <SocialIconsList>
       <SocialIconsList>
           <Icon iconId={"instagram"}/>
       </SocialIconsList>
        </SocialIconsList>
        <Copyright>© 2023 Ksenia Baguzova, All Rights Reserved.</Copyright>
     </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const Name = styled.span`

`

const SocialIconsList = styled.ul`

`

const Copyright = styled.small`

`