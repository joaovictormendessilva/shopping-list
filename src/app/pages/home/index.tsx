import { ScrollView, Text, View } from "react-native";

import { PageHeader } from "../../components/page-title";
import { styles } from "./styles";
import { ProductList } from "./components/products-list";

export default function Index() {
  return (
    <View style={styles.container}>
      <PageHeader title="Home" />

      <ProductList />
    </View>
  );
}
