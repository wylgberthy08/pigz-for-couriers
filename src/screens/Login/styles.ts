import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 24px;
  background: #ffff;
`;

export const LogoView = styled.View`
  width: 100%;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: "Poppins-SemiBold";
  font-size: 18px;
`;

export const TitleScreen = styled.Text`
  font-family: "Poppins-SemiBold";
  font-size: 16px;
  margin-top: 37px;
`;

export const WrapperLogin = styled.View`
  width: 100%;
`;

export const RecoverButton = styled.TouchableOpacity`
  margin-top: 24px;
  margin-bottom: 24px;
`;
export const RecoverButtonText = styled.Text`
  font-family: "Poppins-Regular";
  font-size: 13px;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.text};
`;

interface TextProps {
  color: string;
}

export const TextRegister = styled.Text<TextProps>`
  font-family: "Poppins-Regular";
  color: ${({ color }) => color};
  font-size: 13px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 36px;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: flex-end;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const SocialLoginText = styled.Text`
  font-family: "Poppins-SemiBold";
  color: ${({ theme }) => theme.colors.title};
`;
export const Bar = styled.View`
  width: 280px;
  height: 1px;
  margin-top: 2px;
  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const SocialLoginTitle = styled.Text`
 margin: 0 auto;
`;
export const SocialWrapper = styled.TouchableOpacity`
  flex-direction: row;
  height: 48px;
  margin-top: 33px;
  border: 1px solid #9f9f9f;
  border-radius: 16px;
  align-items: center;
`;
