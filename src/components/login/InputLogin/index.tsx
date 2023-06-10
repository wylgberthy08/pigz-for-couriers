import React from "react";

import { Container, Input, Label } from "./styles";

interface Props {
  label: string;
  placeholder: string;
}

export function InputLogin({ label, placeholder }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </Container>
  );
}
