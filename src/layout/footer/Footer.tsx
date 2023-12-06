import React from 'react';
import { Icon } from '../../componens/icon/Icon';
import { FlexWrapper } from '../../componens/FlexWrapper';
import {S} from './../footer/Footer_Styles';

const socialItemsData =[
   {
      iconId:"instagram",
   },
   {
      iconId:"linkedin",
   },
   {
      iconId:"telegram",
   },
   {
      iconId:"vkontakte",
   },
]

export const Footer :React.FC = () => {
    return(
     <S.Footer>
        <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Ksenia</S.Name>
       <S.SocialList>
         {socialItemsData.map((s:{iconId:string}, index)=>{
         return <S.SocialItem key={index}>
                  <S.SocialLink>
                     <Icon height={"21px"}  viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
                  </S.SocialLink>
                </S.SocialItem>
         })}
      </S.SocialList>
        <S.Copyright>© 2023 Ksenia Baguzova, All Rights Reserved.</S.Copyright>
        </FlexWrapper>
      
     </S.Footer>
    );
};

