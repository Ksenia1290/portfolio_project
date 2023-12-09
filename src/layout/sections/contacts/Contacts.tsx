import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Button } from "../../../componens/Button";
import { Container } from "../../../componens/Container";
import {S} from "./Contacts_Styles";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () =>{
   const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e:any) => {
    e.preventDefault();

    if(!form.current)return

    emailjs.sendForm('service_yqq349p', 'template_r00qp29', form.current, 'm5qnJ7YS6rVBF-cL3')
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
            <S.Form ref={form} onSubmit={sendEmail}>
               <S.Field placeholder={"name"}/>
               <S.Field placeholder={"subject"}/>
               <S.Field placeholder={"message"} as = {"textarea"}/>
               <Button type={"submit"}>Send message</Button>
            </S.Form> 
         </Container>
       </S.Contacts>
    );
};

