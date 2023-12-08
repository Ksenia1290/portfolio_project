import React from "react";
import { styled } from "styled-components";
import { Link } from "../../../../componens/ Link";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems:Array<{status:TabsStatusType, title:string}>
    changeFilterStatus: (value:TabsStatusType) => void
    currentFilterStatus:TabsStatusType
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
    <StyledTabMenu>
        <ul>
            {props.tabsItems.map(
            (item:{status: TabsStatusType; title:string},index:number)=> {
             return <ListItem key={index}>
                       <Link active={true} as={"button"} onClick={()=>{props.changeFilterStatus (item.status)}}>{item.title}</Link>
                   </ListItem>
            })}
        </ul>
    </StyledTabMenu> 
    );
};


const StyledTabMenu = styled.nav`
ul {
    display: flex;
    //gap:20px;
    justify-content:space-between;
    max-width: 352px;
    width:100%;
    border:1px solid red;
    margin:0 auto 40px;
}
`
const ListItem = styled.li`
position: relative;
z-index: 0;
`


