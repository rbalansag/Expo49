import axios, { AxiosResponse } from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

interface RequestConfig {
   params?: any;
   headers?: any;
}

// sample API for testing
// returns: Object {
//   "completed": false,
//   "id": 1,
//   "title": "delectus aut autem",
//   "userId": 1,
// }

export const fetchDataFromAPI = async <T>(endpoint: string, params: any = {}, headers: any = {}): Promise<T> => {
   try {
      const response: AxiosResponse<T> = await axios.get(`${API_URL}/${endpoint}`, { params, headers });
      return response.data;
   } catch (error) {
      console.error(error);
      throw error;
   }
};
