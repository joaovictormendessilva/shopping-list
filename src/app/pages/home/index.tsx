import { ScrollView, Text } from "react-native";

import { PageHeader } from "../../components/page-title";
import { styles } from "./styles";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <PageHeader title="Home" />
    </ScrollView>
  );
}
