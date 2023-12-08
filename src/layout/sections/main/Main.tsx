import React from "react";
import photo from '../../../assets/images/photo.jpeg'
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Container } from "../../../componens/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
    return (
<S.Main>
    <Container>
    <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
    <div>
        <S.Smalltext>Hi There</S.Smalltext>
        <S.Name>I am <span>Ksenia Baguzova</span></S.Name>
        <S.MainTitle>
            <p>A Web Developer</p>
        <Typewriter
           options={{
             strings: ['A Web Developer','A Frontend Developer'],
             autoStart: true,
             loop: true,
             delay: 50,
  }}
/>
        </S.MainTitle>
    </div>

<Tilt>
    <S.PhotoWrapper>
    <S.Photo src={photo} alt=""/>
    </S.PhotoWrapper>
</Tilt>

    </FlexWrapper>
    </Container>
</S.Main>
    );
};

