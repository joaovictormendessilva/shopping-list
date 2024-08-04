import { Ionicons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "./styles";
import { EnterProductInputProps } from "./types/enter-product-input-props";

export function EnterProductInput({
  inputValue,
  onHandleChangeInput,
  disableSubmitButton,
  onSubmitProduct,
}: EnterProductInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={(e) => onHandleChangeInput(e)}
          style={styles.textInput}
          placeholder="Enter your product..."
        />
      </View>

      <Pressable onPress={onSubmitProduct} disabled={disableSubmitButton}>
        <Ionicons
          style={[
            styles.icon,
            disableSubmitButton ? styles.iconDisabled : null,
          ]}
          name="add-circle-sharp"
        />
      </Pressable>
    </View>
  );
}
