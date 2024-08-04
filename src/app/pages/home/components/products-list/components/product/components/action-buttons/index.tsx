import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { styles } from "./styles";
import { ActionButtonsProps } from "./types/action-buttons-props";

export function ActionButtons({ id, onHandleAction }: ActionButtonsProps) {
  const handleClick = (action: "Done" | "Delete") => {
    onHandleAction(action, id);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleClick("Delete")}>
        <Ionicons style={[styles.icon]} name="close-circle-sharp" />
      </Pressable>
      <Pressable onPress={() => handleClick("Done")}>
        <Ionicons
          style={[styles.icon, styles.checkIcon]}
          name="checkmark-circle-sharp"
        />
      </Pressable>
    </View>
  );
}
