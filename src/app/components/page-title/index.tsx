import { View, Text, Pressable } from "react-native";
import { PageHeaderProps } from "./types/page-title-props";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View>
        <Pressable onPress={() => alert("Clicou no menu")}>
          <Ionicons style={styles.icon} name="ellipsis-horizontal" />
        </Pressable>
      </View>
    </View>
  );
}
