import React from "react";

import { Container, FullRoute, Info, Title } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export function SelectCard() {
  return (
    <Container>
      <LinearGradient
        style={{
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 16,
          height: 50,
          paddingLeft:20,
          paddingBottom:5,
          paddingTop:7,
          width: "100%",
        }}
        colors={["#FA641E", "#FF881F"]}
      >
        <MaterialIcons name="delivery-dining" size={24} color="#fff" />
        <Info>
          <Title>Entrega</Title>
          <FullRoute>Percurso Total: 8km</FullRoute>
        </Info>
      </LinearGradient>
    </Container>
  );
}
