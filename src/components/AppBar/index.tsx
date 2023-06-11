import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Container, Title } from "./styles";
interface Props {
  title: string;
}
export function AppBar({title}: Props) {
  return (
    <Container>
      <AntDesign name="arrowleft" size={24} color="#FA641E" />
      <Title>{title}</Title>
    </Container>
  );
}
