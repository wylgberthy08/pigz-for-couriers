import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Container, TextButton } from "./styles";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export function Button({ text, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <LinearGradient
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          height: 48,
          width: "100%",
        }}
        // Button Linear Gradient
        colors={["#FA641E", "#FF881F"]}
      >
        <TextButton>{text}</TextButton>
      </LinearGradient>
    </Container>
  );
}
