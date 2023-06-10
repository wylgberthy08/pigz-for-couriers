import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, TextButton } from "./styles";

interface ButtonProps {
  text: string;
  onPress: () => void;
  hasIcon?: boolean;
}

export function Button({ hasIcon, text, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <LinearGradient
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 16,
          height: 48,
          width: "100%",
        }}
        // Button Linear Gradient
        colors={["#FA641E", "#FF881F"]}
      >
        {hasIcon && (
          <MaterialIcons name="qr-code-scanner" size={24} color="#fff" />
        )}

        <TextButton>{text}</TextButton>
      </LinearGradient>
    </Container>
  );
}
