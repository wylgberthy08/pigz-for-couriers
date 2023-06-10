import React from "react";

import { Amount, Container, Title } from "./styles";

interface Props {
  title: string;
  amount: string;
}
export function DeliveryCards({ title, amount }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
