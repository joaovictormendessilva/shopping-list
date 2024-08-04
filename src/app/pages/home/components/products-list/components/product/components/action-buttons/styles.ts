import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  icon: {
    fontSize: 32,
  },

  checkIcon: {
    color: theme.COLOR.ligthGreen,
  },
});
