import React from "react";
import { Card } from "../Card";
import {
  ButtonDelivery,
  ButtonText,
  Container,
  Input,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";
import { Button } from "../../Button";

export function NewDeliveryCard() {
  return (
    <Card>
      <Container>
        <Title>NewDeliveryCard</Title>
        <SubTitle>Número de Identificação</SubTitle>
        <Wrapper>
          <Input />
          <ButtonDelivery>
            <ButtonText>OK</ButtonText>
          </ButtonDelivery>
        </Wrapper>
        <Button hasIcon  onPress={() => console.log("teste")} text="Escanear Qrcode" />
      </Container>
    </Card>
  );
}
