import { Text, View } from "react-native";
import { ActionButtons } from "./components/action-buttons";
import { styles } from "./styles";
import { ProductProps } from "./types/product-props";

export function Product({ title, id, done, onHandleAction }: ProductProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, done && styles.doneTitle]}>{title}</Text>

      <ActionButtons id={id} onHandleAction={onHandleAction} />
    </View>
  );
}
