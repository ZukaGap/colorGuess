import { AsyncStorage } from 'react-native';

export const retrieveData = async (key) => {
    try {
        let value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log("retriveData =>",key,": ",value)
            return value;
        }
    } catch (error) {
        console.error(error);
    }
};

export const storeData = async (key,value) => {
    try {
        console.log(key,": ",value)
        await AsyncStorage.setItem( key, value );
    } catch (error) {
        console.error(error);
    }
};