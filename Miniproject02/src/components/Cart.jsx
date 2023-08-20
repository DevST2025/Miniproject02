import { useDispatch, useSelector } from "react-redux";
import ListProductsCart from "./ListProductsCart";
import { useEffect, useState } from "react";
import Notify from "./Notify";

export default function Cart() {
  const productCart = useSelector((state) => state.quantity);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const newData = productCart.reduce((acc, cur) => {
      return acc + cur.quantity * cur.price;
    }, 0)
      setTotal(newData)
  }, [productCart])

  return (
    <div className="mt-6 h-full  md:mt-0 md:w-1/3">
      <div className="flex justify-between my-5">
        <h3 className=" text-lg font-semibold">Your Cart</h3>
        <p>
          <span>{productCart.length}</span>&nbsp; items
        </p>
      </div>
      <table className="w-full table-auto  mb-6 rounded-lg bg-white p-6 shadow-md ">
        <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400 rounded-lg">
          <tr>
            <th className="p-2">
              <div className="text-left font-semibold">Product Name</div>
            </th>
            <th className="p-2">
              <div className="text-left font-semibold">Quantity</div>
            </th>
            <th className="p-2">
              <div className="text-left font-semibold">Total</div>
            </th>
            <th className="p-2">
              <div className="text-center font-semibold">Action</div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 text-sm">
          {productCart.map((item) => (
            <ListProductsCart key={item.productId} item={item}  />
          ))}
        </tbody>
        <tfoot className="divide-y divide-gray-100 text-sm ">
          <tr>
            <td colSpan={4}>
              <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
                <div>Total</div>
                <div className="text-blue-600">
                  ${total} <span x-text="total.toFixed(2)" />
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      <Notify />
    </div>
  );
}
