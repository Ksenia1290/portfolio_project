import React, { useRef } from "react";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Button } from "../../../componens/Button";
import { Container } from "../../../componens/Container";
import {S} from "./Contacts_Styles";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () =>{
   const form = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    if(!form.current)return
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
       <S.Contacts>
         <Container>
         <SectionTitle>Contact</SectionTitle>
            <S.Form>
               <S.Field placeholder={"name"}/>
               <S.Field placeholder={"subject"}/>
               <S.Field placeholder={"message"} as = {"textarea"}/>
               <Button type={"submit"}>Send message</Button>
            </S.Form> 
         </Container>
       </S.Contacts>
    );
};

