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

  const key = "products_list";

  useEffect(() => {
    const loadProducts = async () => {
      const result = await getStorage(key);
      setProducts(result);
    };

    loadProducts();
  }, [refetch]);

  const handleChangeInput = (value: string) => {
    setFieldText(value);
  };

  const submitProduct = async () => {
    const productsList: ProductsList[] = await getStorage(key);

    productsList.push({ id: Date.now(), title: fieldText, done: false });

    await AsyncStorage.setItem(key, JSON.stringify(productsList));

    setRefetch(!refetch);

    setFieldText("");
  };

  const removeItem = async (id: number) => {
    const productsList: ProductsList[] = await getStorage(key);
    const newProductsList = productsList.filter((product) => {
      return product.id !== id;
    });
    await AsyncStorage.setItem(key, JSON.stringify(newProductsList));
    setRefetch(!refetch);
  };

  const markAsDone = async (id: number) => {
    const productsList: ProductsList[] = await getStorage(key);

    const newProductsList = productsList.map((product) => {
      if (product.id === id) {
        return { ...product, done: !product.done };
      }
      return product;
    });

    await AsyncStorage.setItem(key, JSON.stringify(newProductsList));
    setRefetch(!refetch);
  };

  const handleAction = (action: "Done" | "Delete", id: number) => {
    switch (action) {
      case "Done": {
        return markAsDone(id);
      }
      default: {
        removeItem(id);
      }
    }
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
        renderItem={({ item }) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            done={item.done}
            onHandleAction={handleAction}
          />
        )}
        horizontal={false}
      />
    </View>
  );
}
