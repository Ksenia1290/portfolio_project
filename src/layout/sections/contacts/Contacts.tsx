import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Button } from "../../../componens/Button";
import { Container } from "../../../componens/Container";

export const Contact = () =>{
    return(
       <StyledContacts>
         <Container>
         <SectionTitle>Contact</SectionTitle>
            <StyledForm>
               <Field placeholder={"name"}/>
               <Field placeholder={"subject"}/>
               <Field placeholder={"message"} as = {"textarea"}/>
               <Button type={"submit"}>Send message</Button>
            </StyledForm> 
         </Container>
       </StyledContacts>
    );
};

const StyledContacts = styled.section`
   
`


const StyledForm = styled.form`
    max-width: 540px;
    width:100%;
    display:flex;
    flex-direction:column;
    gap:16px
    `


const Field = styled.input`
    
`
