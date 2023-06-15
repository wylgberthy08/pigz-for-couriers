import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Overview } from "../screens/Overview";
import { Profile } from "../screens/Profile";
import { Reports } from "../screens/Reports";

import { Feather, AntDesign } from "@expo/vector-icons";
import { NewDelivery } from "../screens/ NewDelivery";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Overview"
        component={Overview}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="NewDelivery"
        component={NewDelivery}
      />
    </Stack.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Feather name="home" size={24} color="#FA641E" />;
            }
            return <Feather name="home" size={24} color="black" />;
          },
        }}
        name="StackRoutes"
        component={StackRoutes}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <AntDesign name="user" size={24} color="#FA641E" />;
            }
            return <AntDesign name="user" size={24} color="black" />;
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
