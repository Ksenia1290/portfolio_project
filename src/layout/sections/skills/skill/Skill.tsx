import React from "react";
import { Icon } from "../../../../componens/icon/Icon";
import { FlexWrapper } from "../../../../componens/FlexWrapper";
import {S} from './../skills_Styles';

type SkillPropsType = {
    iconId : string
    title: string
    description: string
}


export const Skill = (props: SkillPropsType) =>{
    return(
<S.Skill>
    <FlexWrapper direction={"column"} align={"center"}>
       <S.IconWrapper>
         <Icon iconId={props.iconId }/>
       </S.IconWrapper>
    <S.SkillTitle>{props.title}</S.SkillTitle>
     <S.SkillText>{props.description}</S.SkillText>
    </FlexWrapper>
</S.Skill>
    );
};

