import React from "react";
import styled from "styled-components";

type WorkPropsType = {
title:string
text:string
src:string
}

export const Work = (props:WorkPropsType) => {
    return(
<StyledWork>
    <Image src={props.src} alt=""/>
    <Title>{props.title}</Title>
    <Text>{props.text}</Text>
    <link href={"#"}>demo</link>
    <link href={"#"}>code</link>
</StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #ffe869;
`

const Image =styled.img`
    
`
const Link =styled.a`
    
`
const Title =styled.h3`
    
`
const Text =styled.p`
    
`