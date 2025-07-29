import axios from "axios";
import configCenter from "@/lib/config";
import { setLoading } from "@/store/slices/loadingSlice";
import { useDispatch } from "react-redux";

export const useFetchApi = () => {
  const baseURL = configCenter.urls.base;
  const dispatch = useDispatch();

  return async ({ endpoint, method = "GET", payload = null }) => {
    dispatch(setLoading(true));

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(5000);

    try {
      const config = {
        method,
        url: `${baseURL}${endpoint}`,
      };

      // detect files in payload
      const hasFiles =
        payload &&
        Object.values(payload).some(
          (value) => value instanceof File || value instanceof Blob
        );

      if (hasFiles) {
        config.data = payload;
        config.headers = { "Content-Type": "multipart/form-data" };
      } else {
        config.data = payload;
        config.headers = { "Content-Type": "application/json" };
      }

      const response = await axios(config);
      return response;
    } catch (error) {
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};
