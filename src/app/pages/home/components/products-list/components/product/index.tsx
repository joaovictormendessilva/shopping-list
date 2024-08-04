import { Text, View } from "react-native";
import { ActionButtons } from "./components/action-buttons";
import { styles } from "./styles";
import { ProductProps } from "./types/product-props";

export function Product({ title }: ProductProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <ActionButtons />
    </View>
  );
}
