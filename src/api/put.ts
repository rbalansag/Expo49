import axios, { AxiosResponse } from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

interface RequestConfig {
   params?: any;
   headers?: any;
}

// sample API for testing
// returns: Object {
//   "completed": true,
//   "id": 1,
// }
export const putDataToAPI = async <T>(endpoint: string, data: any = {}, headers: any = {}): Promise<T> => {
   try {
      const response: AxiosResponse<T> = await axios.put(`${API_URL}/${endpoint}`, data, { headers });
      return response.data;
   } catch (error) {
      console.error(error);
      throw error;
   }
};
