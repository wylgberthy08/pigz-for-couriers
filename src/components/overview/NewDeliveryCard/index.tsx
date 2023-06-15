import React from "react";
import { Card } from "../Card";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.navigate("NewDelivery");
  }
  return (
    <Card>
      <Container>
        <Title>NewDeliveryCard</Title>
        <SubTitle>Número de Identificação</SubTitle>
        <Wrapper>
          <Input />
          <ButtonDelivery onPress={handleNavigation}>
            <ButtonText>OK</ButtonText>
          </ButtonDelivery>
        </Wrapper>
        <Button
          hasIcon
          onPress={() => console.log("teste")}
          text="Escanear Qrcode"
        />
      </Container>
    </Card>
  );
}
