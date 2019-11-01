import {AsyncStorage} from "react-native";

export const getItem = async (path) => {
    const result = await AsyncStorage.getItem(path);
    return JSON.parse(result);
};

export const setItem = async (path, object) => {
    return await AsyncStorage.setItem(path, JSON.stringify(object));
};

export const push = async (path, item) => {

    const result = await getItem(path);

    const array = result || [];
    array.push(item);

    return await setItem(path, item);
};
