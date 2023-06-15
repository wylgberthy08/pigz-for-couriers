import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Container, Title } from "./styles";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDeliverys } from "../../../contexts/deliverys.context";
import { useNavigation } from "@react-navigation/native";

export function ButtonContained() {
  const { acceptDelivery } = useDeliverys();
  const navigation = useNavigation();
  function handleAcceptDelivery() {
    navigation.navigate("Overview");
    acceptDelivery();
  }
  return (
    <LinearGradient
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 16,
        marginTop: 36,
        height: 48,
        width: "100%",
      }}
      colors={["#FA641E", "#FF881F"]}
    >
      <Container onPress={handleAcceptDelivery}>
        <AntDesign name="check" size={24} color="#fff" />
        <Title>Aceitar</Title>
      </Container>
    </LinearGradient>
  );
}
