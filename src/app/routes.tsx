import { createStackNavigator } from "@react-navigation/stack";

import Home from "../app/pages/home";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        children={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
