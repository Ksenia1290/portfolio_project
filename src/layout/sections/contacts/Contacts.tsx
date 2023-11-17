import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";

export const Contact = () =>{
    return(
       <StyledContacts>
         <SectionTitle>Contact</SectionTitle>
            <StyledForm>
               <Field/>
               <Field/>
               <Field as = {"textaria"}/>
            </StyledForm> 
       </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50;
   background-color:#fffae1;
`


const StyledForm = styled.form`
    min-width: 500px;
    width:100%;
    display:flex;
    flex-direction:column;
`

const Field = styled.input`
    
`
