import { ScrollView, StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLOR.darkBlue,
    flex: 1,
  },
});

export default function Index() {
  return <ScrollView style={styles.container}></ScrollView>;
}
