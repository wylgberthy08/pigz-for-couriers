import React from "react";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { Amount, Container, Header, HeaderText, Wrapper } from "./styles";

export function EarningsCard() {
  return (
    <Container>
      <LinearGradient
        style={{
          borderRadius: 16,
          height: 107,
          width: "100%",
        }}
        colors={["#FA641E", "#FF881F"]}
      >
        <Header>
          <HeaderText>Ganhos do Dia</HeaderText>
          <HeaderText>29/07</HeaderText>
        </Header>
        <Wrapper>
          <Amount>R$ 150</Amount>
          <Feather name="eye" size={24} color="#ffff" />
        </Wrapper>
      </LinearGradient>
    </Container>
  );
}
