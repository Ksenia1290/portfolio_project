import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from './../../../assets/images/social network.png'
import timerImg from './../../../assets/images/new york.png'
import { Container } from "../../../componens/Container";
import { TabMenu } from "./tabMenu/TabMenu";
import {S} from "./Works_Styles";


///const tabsItems =["All","Landing page","React","spa"]
const tabsItems: Array<{status:"all" | "landing" | "react" | "spa", title:string}> =[
    {
        title:"All",
        status:"all"
    },
    {
        title:"Landing page",
        status:"landing"
    },
    {
        title:"React",
        status:"react"
    },
    {
        title:"spa",
        status:"spa"
    },
]

const workData = [
    {
        title:'Social Network',
        src:socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type:"spa",
    },
    {
        title:'Timer',
        src:timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type:"react",
    }
]

export const Works:React.FC = () =>{
const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
const filteredWorks = worksData

if (currentFilterStatus === "landing") {

}

    return(
<S.Works>
     <Container>
     <SectionTitle>My Works</SectionTitle>
      <TabMenu tabsItems={tabsItems}/>
      <FlexWrapper justify={"space-between"} align={"flex-statr"} wrap={"wrap"}>
       {filteredWorks.map((w:{src:any,text:string,title:string}) =>{
       return <Work title={w.title} 
              src={w.src}
              text={w.text}/>
       })}

      </FlexWrapper>
     </Container>
</S.Works>
    );
};


