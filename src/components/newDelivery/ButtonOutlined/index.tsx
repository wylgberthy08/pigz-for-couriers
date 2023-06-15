import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Container, Title } from "./styles";

export function ButtonOutlined() {
  return (
    <Container>
      <AntDesign name="close" size={24} color="#E8453E" />
      <Title>Rejeitar</Title>
    </Container>
  );
}
