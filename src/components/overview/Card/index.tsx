import React, { ReactNode } from "react";

import { Container } from "./styles";

interface Props {
  children?: ReactNode;
}

export function Card({ children }: Props) {
  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
      }}
    >
     {children}
    </Container>
  );
}
