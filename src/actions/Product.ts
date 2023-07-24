/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-hot-toast";
import { instance } from "src/axios/config";
import { pause } from "src/utils/pause";

export const fetchProducts = () => async (dispatch: any) => {
  dispatch({ type: "product/fetching" });
  try {
    await pause(1000);
    const data = await instance.get("/products");
    dispatch({ type: "product/fetchingSuccess", payload: data });
  } catch (error: any) {
    dispatch({ type: "product/fetchingFailed", payload: error.message });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};

export const add = (item: any) => async (dispatch: any) => {
  try {
    const data = await instance.post(`/products`, item);
    dispatch({ type: "product/add", payload: data });
  } catch {
    toast.error("Something went wrong !");
  }
};

export const update = (item: any) => async (dispatch: any) => {
  try {
    const data = await instance.put(`/products/${item.id}`, item);
    dispatch({ type: "product/update", payload: data });
  } catch {
    toast.error("Something went wrong !");
  }
};

export const remove = (id: string | number) => async (dispatch: any) => {
  try {
    const confirm = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirm) {
      await instance.delete(`/products/${id}`);
      dispatch({ type: "product/remove", payload: id });
    }
  } catch {
    toast.error("Something went wrong !");
  }
};
