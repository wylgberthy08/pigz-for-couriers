import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Bar,
  ButtonRegister,
  Container,
  Footer,
  LogoView,
  RecoverButton,
  RecoverButtonText,
  SocialLoginText,
  SocialLoginTitle,
  SocialWrapper,
  TextRegister,
  Title,
  TitleScreen,
  Wrapper,
  WrapperLogin,
} from "./styles";
import { Image, Text } from "react-native";

import Logo from "../../assets/pigz-logotipo-branco.png";
import Google from "../../assets/search.png";
import { InputLogin } from "../../components/login/InputLogin";
import { Button } from "../../components/Button";

export function Login() {
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate("Overview");
  }
  return (
    <Container>
      <LogoView>
        <Image source={Logo} />
        <Title>Para entregadores</Title>
      </LogoView>
      <TitleScreen>Login</TitleScreen>
      <WrapperLogin>
        <InputLogin
          label="Email ou Telefone"
          placeholder="example@pigz.com.br"
        />
        <InputLogin label="Senha" placeholder="********" />
      </WrapperLogin>

      <RecoverButton>
        <RecoverButtonText>Esqueci minha senha</RecoverButtonText>
      </RecoverButton>
      <Button text="Entrar" onPress={handleLogin} />

      <ButtonRegister>
        <TextRegister color="#676767">Não tem uma Conta?</TextRegister>
        <TextRegister color="#FA641E">criar agora!</TextRegister>
      </ButtonRegister>

      <Footer>
        <Wrapper>
          <SocialLoginText>Entrar com</SocialLoginText>
          <Bar />
        </Wrapper>

        <SocialWrapper>
          <Image
            style={{ width: 20, height: 20, marginLeft: 16 }}
            source={Google}
          />
          <SocialLoginTitle>Continuar com o Google</SocialLoginTitle>
        </SocialWrapper>
      </Footer>
    </Container>
  );
}
