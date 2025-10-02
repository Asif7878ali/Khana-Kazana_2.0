import axios from "axios";
import configCenter from "@/lib/config";
import endPoint from "./endpoints";
import { setLoading } from "@/store/slices/loadingSlice";


export async function imageUploadSingle(file, dispatch) {
  if (!file || !(file instanceof File)) {
    throw new Error("A valid image file must be provided.");
  }
  const baseURL = configCenter.urls.base;
  const endpoint = endPoint.imageProfileImage;
  const formData = new FormData();
  formData.append("profileImage", file);

  dispatch(setLoading(true));
  try {
    const response = await axios.post(`${baseURL}${endpoint}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
}
