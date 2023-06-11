import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
font-family: 'Poppins-Regular';
font-size: 13px;
color: ${({ theme }) => theme.colors.text};
margin-bottom: 6px;
margin-top: 16px;
`;

export const Input = styled.TextInput`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.main};
  padding: 16px 15px;
  height: 48px;
  border-radius: 16px;
`;
