import { ActivityIndicator, View } from "react-native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const signed = true;
  const loading = false;

  if (loading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={50} color="#FA641E" />
    </View>;
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}
