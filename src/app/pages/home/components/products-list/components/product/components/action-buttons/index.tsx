import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { styles } from "./styles";

export function ActionButtons() {
  return (
    <View style={styles.container}>
      <Ionicons style={[styles.icon]} name="close-circle-sharp" />

      <Ionicons
        style={[styles.icon, styles.checkIcon]}
        name="checkmark-circle-sharp"
      />
    </View>
  );
}
