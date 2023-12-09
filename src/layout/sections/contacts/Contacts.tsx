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
               <S.Field placeholder={"name"} name={'user_name'}/>
               <S.Field placeholder={"email"} name={'email'}/>
               <S.Field placeholder={"subject"} name={'subject'}/>
               <S.Field placeholder={"message"} as = {"textarea"} name={'message'}/>
               <Button type={"submit"}>Send message</Button>
            </S.Form> 
         </Container>
       </S.Contacts>
    );
};

