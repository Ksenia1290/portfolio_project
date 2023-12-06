import React from "react";
import iconsSprire from '../../assets/images/icons-sprite.svg'

type IconPropsType ={
    iconId:string
    while? : string
    height?:string
    viewBox?:string
}

export const Icon:React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
<svg width={props.while || "50"}  height={props.height || "50"} viewBox={props.viewBox ||  "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref={ `${iconsSprire}#${props.iconId}` } />
</svg>
    );
};