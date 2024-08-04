import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStorage = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    return JSON.parse(data!) || [];
  } catch (error) {
    alert(`GetStorage: ${error}`);

    return [];
  }
};
