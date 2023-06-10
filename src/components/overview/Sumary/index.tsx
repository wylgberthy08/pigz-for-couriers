import React from "react";

import { Card } from "../Card";
import { Title, Wrapper } from "./styles";
import { DeliveryCards } from "../DeliveryCards";

export function Summary() {
  return (
    <Card>
      <Title>Resumos das Entregas</Title>
      <Wrapper>
        <DeliveryCards title="Aceitas" amount="15" />
        <DeliveryCards title="Rejeitadas" amount="5" />
        <DeliveryCards title="Total" amount="20" />
      </Wrapper>
    </Card>
  );
}
