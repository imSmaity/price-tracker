import Axios from "axios";
import { config } from "./config";

const axiosInstance = Axios.create({
  baseURL: config.baseUrl, //  base URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: config.apiKey,
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLatestCoinData(asset: string) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get("/market/data".concat(`?asset=${asset}`))
        .then((res) => resolve(res.data))
        .catch(reject);
    });
  },
  getCoinHistoryData(
    asset: string,
    from: string | number,
    to: string | number,
    dataLimit: number
  ) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(
          "/market/history/pair".concat(
            `?asset=${asset}&from=${from}&to=${to}&amount=${dataLimit}`
          )
        )
        .then((res) => resolve(res.data))
        .catch(reject);
    });
  },
};
