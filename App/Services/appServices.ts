import {ConfigApp} from 'appConfig';
import {StorageApp} from 'appUtils';
import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';

/*
  application service for handling data from server
*/

class AppServer {
  constructor() {
    axios.interceptors.request.use(this.handleBeforeRequest);
    axios.interceptors.response.use(this.handleAfterRequest);
  }
  /* execute before request to server */
  private handleBeforeRequest = (req: AxiosRequestConfig) => {
    /* set token and header configurations */
    try {
      const token = StorageApp.getToken().then((token) => token);
      /* set header configuration */
      req.headers['Authorization'] = `Beaarer ${token}`;
      req.headers['Content-Type'] = 'application/json';
      req.headers['Accept'] = 'application/json';

      return req;
    } catch (e) {
      throw new Error('failed to set request server');
    }
  };
  /* execute every response from server */
  private handleAfterRequest = (res: AxiosResponse) => {
    try {
      if (res.status == 200) {
        return res.data;
      }
      /* throw error when status code are not equevalent 200 */
      throw new Error('data resposne is nor falid');
    } catch (err) {
      return err;
    }
  };

  public async authLogin(data: Iuser): Promise<any> {
    try {
      return await axios.post<IuserResponse>(ConfigApp.env.api.login, data);
    } catch (err) {
      return err;
    }
  }
  public async authRegister(data: any) {
    try {
      return await axios.post(ConfigApp.env.api.login, data);
    } catch (err) {
      return err;
    }
  }
}

export default AppServer;
