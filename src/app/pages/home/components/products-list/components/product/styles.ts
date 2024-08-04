import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLOR.lightRed,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderTopStartRadius: 8,
    borderBottomLeftRadius: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.COLOR.white,
  },
});
