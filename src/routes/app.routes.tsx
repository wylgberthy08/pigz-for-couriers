import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Overview } from "../screens/Overview";
import { Profile } from "../screens/Profile";
import { Reports } from "../screens/Reports";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Overview"
        component={Overview}
      />
      <Tab.Screen name="Reports" component={Reports} />
    </Tab.Navigator>
  );
}
