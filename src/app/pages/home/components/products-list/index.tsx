import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { EnterProductInput } from "./components/enter-product-input";
import { Product } from "./components/product";
import { styles } from "./styles";
import { ProductsList } from "./types/product-list";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "@/src/app/utils/get-storage";

export function ProductList() {
  const [fieldText, setFieldText] = useState<string>("");
  const [products, setProducts] = useState<ProductsList[]>([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const result = await getStorage("products_list");
      setProducts(result);
    };

    loadProducts();
  }, [refetch]);

  const submitProduct = async () => {
    const productsList: ProductsList[] = await getStorage("products_list");

    productsList.push({ id: Date.now(), title: fieldText });

    await AsyncStorage.setItem("products_list", JSON.stringify(productsList));

    setRefetch(!refetch);

    setFieldText("");
  };

  const handleChangeInput = (value: string) => {
    setFieldText(value);
  };

  const disableSubmitButton = fieldText.length === 0;

  return (
    <View style={styles.container}>
      <EnterProductInput
        inputValue={fieldText}
        onHandleChangeInput={handleChangeInput}
        disableSubmitButton={disableSubmitButton}
        onSubmitProduct={submitProduct}
      />

      <FlatList
        data={products}
        renderItem={({ item }) => <Product id={item.id} title={item.title} />}
        horizontal={false}
      />
    </View>
  );
}
