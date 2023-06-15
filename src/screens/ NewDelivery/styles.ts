import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 19px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #707070;
  padding-bottom: 14px;
  margin-top: 59px;
`;
export const Wrapper = styled.View`
  align-items: center;
  margin: 0 auto;
`;

export const Label = styled.Text`
  font-family: "Poppins-Regular";
  color: #707070;
`;

export const Content = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main};
`;

export const PriceWrapper = styled.View`
  width: 100%;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 35px;
  color: ${({ theme }) => theme.colors.main};
`;

export const WrapperStaps = styled.View`
  width: 100%;
  margin-top: 34px;
`;
