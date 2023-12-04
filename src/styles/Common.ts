import { theme } from "./Theme"


type FontPropsType={
    family?: string
    weight?:number
    color? : string
    lineHeight?:number
}

export const font = ({family,weight,color,lineHeight}: FontPropsType) =>`
font-family: ${family || "Poppins"};
font-weight: ${weight || 400};
color: ${color || theme.colors.font};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 16px);
`