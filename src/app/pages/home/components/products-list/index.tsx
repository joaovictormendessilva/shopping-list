import { useState } from "react";
import { FlatList, View } from "react-native";
import { EnterProductInput } from "./components/enter-product-input";
import { Product } from "./components/product";
import { styles } from "./styles";
import { ProductsList } from "./types/product-list";

export function ProductList() {
  const [fieldText, setFieldText] = useState<string>("");
  const [products, setProducts] = useState<ProductsList[]>([]);

  const handleChangeInput = (value: string) => {
    setFieldText(value);
  };

  const submitProduct = () => {
    setProducts([...products, { id: Date.now(), title: fieldText }]);

    clearSetFieldText();
  };

  const clearSetFieldText = () => {
    setFieldText("");
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
