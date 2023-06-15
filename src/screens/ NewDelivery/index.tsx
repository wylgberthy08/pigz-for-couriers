import React from "react";

import {
  Container,
  Label,
  Info,
  Wrapper,
  Content,
  PriceWrapper,
  Price,
  WrapperStaps,
} from "./styles";
import { Text } from "react-native";
import { AppBar } from "../../components/AppBar";
import { SelectCard } from "../../components/newDelivery/SelectCard";
import { Steps } from "../../components/newDelivery/Steps";
import { ButtonContained } from "../../components/newDelivery/ButtonContained";
import { ButtonOutlined } from "../../components/newDelivery/ButtonOutlined";
import { useDeliverys } from "../../contexts/deliverys.context";

export function NewDelivery() {
  
  return (
    <Container>
      <AppBar title="Nova entrega" />
      <Info style={{ borderBottomColor: "#707070", borderBottomWidth: 1 }}>
        <Wrapper>
          <Label>Tempo Estimado</Label>
          <Content>30 Min</Content>
        </Wrapper>
        <Wrapper>
          <Label>Número de ID</Label>
          <Content>#6789</Content>
        </Wrapper>
      </Info>
      <PriceWrapper>
        <Label>Valor da Entrega</Label>
        <Price>R$ 13,75</Price>
      </PriceWrapper>
      <SelectCard />
      <WrapperStaps>
        <Steps
          title="Coleta"
          subTitle="Restaurante Recanto da Peixada Distancia: 2km"
        />
        <Steps
          title="Coleta"
          subTitle="Restaurante Recanto da Peixada Distancia: 2km"
        />
      </WrapperStaps>
      <ButtonContained />
      <ButtonOutlined />
    </Container>
  );
}
