import React from "react";

import { Container } from "./styles";
import { AppBar } from "../../components/AppBar";
import { EarningsCard } from "../../components/overview/EarningsCard";
import { Summary } from "../../components/overview/Sumary";
import { NewDeliveryCard } from "../../components/overview/NewDeliveryCard";

export function Overview() {
  return (
    <Container>
      <AppBar title="Visão geral" />
      <EarningsCard />
      <Summary  />
      <NewDeliveryCard/>
    </Container>
  );
}
