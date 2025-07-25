import axios from "axios";
import configCenter from "@/lib/config";
import { setLoading } from "@/store/slices/loadingSlice";
import { useDispatch } from "react-redux";

export const useFetchApi = () => {
  const baseURL = configCenter.urls.base;
  const dispatch = useDispatch();

  return async ({ endpoint, method = "GET", payload = null }) => {
    dispatch(setLoading(true));

    try {
      const response = await axios({
        method,
        url: `${baseURL}${endpoint}`,
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};
