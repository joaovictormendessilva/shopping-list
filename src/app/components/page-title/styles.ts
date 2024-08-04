import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: theme.COLOR.white,
  },

  icon: {
    fontSize: 32,
    color: theme.COLOR.white,
  },
});
