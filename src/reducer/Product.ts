/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "src/interfaces/Product";
import { produce } from "immer";
import Swal from 'sweetalert2'

const initialState = {
  products: [],
  isLoading: false,
  error: "",
} as { products: IProduct[]; isLoading: boolean; error: string };

export const ProductReducer = (state = initialState, action: any) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      // FETCH
      case "product/fetching":
        draftState.isLoading = true;
        break;
      case "product/fetchingSuccess":
        draftState.products = action.payload;
        draftState.isLoading = false;
        break;
      case "product/fetchingFailed":
        draftState.error = action.payload;
        break;
      case "product/fetchingFinally":
        draftState.isLoading = false;
        break;

      // ADD
      case "product/add":
        draftState.products.push(action.payload);
        break;
      // UPDATE
      case "product/update":
        const product = action.payload
        draftState.products = state.products.map((item:any) => item.id === product.id ? product : item)
        break;
      // REMOVE
      case "product/remove":
        const id = action.payload;
        draftState.products = state.products.filter(
            (item: any) => item.id !== id
          );
        break;
      default:
        return state;
    }
  });
};
