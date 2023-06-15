import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 25px;
  margin-bottom: 6px;
`;

export const Circle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: #fa641e;
  margin-right: 9px;
  margin-bottom: 5px;
`;
export const Title = styled.Text`
  font-family: "Poppins-Medium";
  font-size: 18px;
  color: ${({ theme }) => theme.colors.main};
`;
export const Circleo = styled.View`
  width: 9px;
  height: 9px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 50px;
  margin-right: 12px;
  margin-bottom: 6px;
`;
export const SubTitle = styled.Text`
  margin-bottom: 6px;
`;
