import Keychain from 'react-native-keychain';

/* 
  used for storing sensitif data 
  created by mahmud 
*/
type credensialType = {
  username: string;
  password: string;
};

export default class StorageApp {
  public static async setToken(item: any): Promise<void> {
    try {
      await Keychain.setGenericPassword('token', item);
    } catch (err) {}
  }
  public static async getToken(): Promise<string | undefined> {
    try {
      const credensial:
        | credensialType
        | boolean = await Keychain.getGenericPassword();
      return credensial && credensial.password ? credensial.password : '';
    } catch (err) {}
  }
}
