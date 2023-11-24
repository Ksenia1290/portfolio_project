import React from "react";
import { Icon } from "../../../../componens/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId : string
    title: string
    description: string
}


export const Skill = (props: SkillPropsType) =>{
    return(
<StyledSkill>
    <Icon iconId={props.iconId }/>
    <SkillTitle>{props.title}</SkillTitle>
     <SkillText>{props.description}</SkillText>
</StyledSkill>
    );
};

const StyledSkill = styled.div`
width: 380px;
padding: 62px 20px 40px;
`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`
`