import * as SecureStore from 'expo-secure-store';

export class StorageHelper {
    static set = async (key: string, value: string) => {
        await SecureStore.setItemAsync(key, value);
    };
    
    static get = async (key: string) => {
        return await SecureStore.getItemAsync(key);
    };

    static delete = (key: string) => {
        SecureStore.deleteItemAsync(key);
    };
}
