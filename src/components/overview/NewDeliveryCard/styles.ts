import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px 16px 24px 16px;
`;

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 16px;
`;

export const SubTitle = styled.Text`
  font-family: "Poppins-Regular";
  color: #9f9f9f;
  font-size: 12px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;

`;

export const Input = styled.TextInput`
  width: 240px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 16px;
`;

export const ButtonDelivery = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.main};
  width: 64px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-left: 12px;
`;

export const ButtonText = styled.Text`
  font-family: "Poppins-Medium";
  color: #fff;

  font-size: 17px;
`;
