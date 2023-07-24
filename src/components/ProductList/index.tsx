/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import { useEffect } from "react";
import { add, fetchProducts, remove, update } from "src/actions/Product";
import { Dispatch } from "redux";
import Skeleton from "react-loading-skeleton";

const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { products, isLoading, error } = useSelector((state: any) => state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h1 className="text-lg font-semibold mb-2">Product List</h1>
      {isLoading && <Skeleton count={3} />}
      {products?.map((product: any) => {
        return (
          <div key={product.id}>
            {product?.name} - {product.price}
          </div>
        );
      })}
      <div className="flex gap-2 pt-3">
        <Button
          type="primary"
          onClick={() => dispatch(add({ name: "Product added", price: 400 }))}
        >
          Thêm
        </Button>
        <Button
          type="primary"
          onClick={() =>
            dispatch(update({ name: "Product updated", id: 4, price: 400 }))
          }
        >
          Sửa
        </Button>
        <Button type="danger" onClick={() => dispatch(remove(4))}>
          Xoá
        </Button>
      </div>
    </div>
  );
};
export default ProductList;
