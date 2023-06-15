import React from "react";

import { Circle, Circleo, Container, SubTitle, Title, Wrapper } from "./styles";

interface Props {
  title: string;
  subTitle: string;
}

export function Steps({ title, subTitle }: Props) {
  return (
    <Container>
      <Wrapper>
        <Circle />
        <Title>{title}</Title>
      </Wrapper>
      <Wrapper>
        <Circleo />
        <SubTitle>{subTitle}</SubTitle>
      </Wrapper>
    </Container>
  );
}
