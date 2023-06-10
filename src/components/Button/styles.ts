import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-family: "Poppins-Medium";
  color: ${({ theme }) => theme.colors.background};
`;
