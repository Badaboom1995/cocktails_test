import apiClient from "@/api/config";
import { toast } from "react-toastify";
import { AxiosResponse, AxiosError } from "axios";

export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

type Response<T> = {
  data: T;
  status: number;
};

// Позже можно добавить поддержку body, headers и других параметров
const makeRequest = async <T,>(
  method: Method,
  url: string
): Promise<Response<T>> => {
  try {
    const response: AxiosResponse<T> = await apiClient[method](url);
    return { data: response.data, status: response.status };
  } catch (error) {
    const axiosError = error as AxiosError;
    toast.error(axiosError.message);
    throw axiosError;
  }
};

export default makeRequest;
