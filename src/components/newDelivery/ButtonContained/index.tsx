import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Container, Title } from "./styles";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function ButtonContained() {
  return (
    <LinearGradient
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 16,
        marginTop: 36,
        height: 48,
        width: "100%",
      }}
      colors={["#FA641E", "#FF881F"]}
    >
      <Container>
        <AntDesign name="check" size={24} color="#fff" />
        <Title>Aceitar</Title>
      </Container>
    </LinearGradient>
  );
}
