import { useDispatch, useSelector } from "react-redux";
import Product from "./Product"

export default function ListProducts() {
  const listProducts = useSelector((state) => state.list);
 

  return (
    <div className="rounded-lg md:w-2/3">
      <div className="flex justify-between my-5">
        <h3 className=" text-lg font-semibold">List Products</h3>
      </div>
      {listProducts.map((item) => (
        <Product key={item.productId} item={item} />
      ))}
    </div>
  );
}
