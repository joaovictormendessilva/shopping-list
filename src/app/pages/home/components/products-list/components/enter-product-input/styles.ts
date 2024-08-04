import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 50,
  },

  textInputContainer: {
    flex: 1,
  },
  textInput: {
    backgroundColor: theme.COLOR.white,
    height: 50,
    fontSize: 22,
    paddingLeft: 10,
    borderRadius: 8,
  },

  icon: { fontSize: 50, color: theme.COLOR.white },
  iconDisabled: { opacity: 0.5 },
});
