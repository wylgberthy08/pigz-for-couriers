import React from "react";

import { Card } from "../Card";
import { Title, Wrapper } from "./styles";
import { DeliveryCards } from "../DeliveryCards";
import { useDeliverys } from "../../../contexts/deliverys.context";

export function Summary() {
  const { accepted, rejected, total } = useDeliverys();
  return (
    <Card>
      <Title>Resumos das Entregas</Title>
      <Wrapper>
        <DeliveryCards title="Aceitas" amount={accepted} />
        <DeliveryCards title="Rejeitadas" amount={rejected} />
        <DeliveryCards title="Total" amount={total} />
      </Wrapper>
    </Card>
  );
}
