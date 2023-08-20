import { useEffect, useState } from "react";
import { decrease, increase, removeProduct } from "../redux/quantity/actions";
import { useDispatch } from "react-redux";

export default function ListProductsCart({ item }) {
  const dispatch = useDispatch();
  const [quantityItem, setQuantityItem] = useState(0);

  useEffect(() => {
    setQuantityItem(item.quantity);
  }, [item.quantity]);

  return (
    <tr key={item.productId}>
      <td className="p-2">
        <div className="font-medium text-gray-800">{item.productName}</div>
      </td>
      <td className="p-2">
        <div className="flex items-center border-gray-100">
          <span
            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            onClick={() => dispatch(decrease(item.productId))}
          >
            {" "}
            -{" "}
          </span>
          <input
            className="h-8 w-10 border bg-white text-center text-xs outline-none"
            type="text"
            value={quantityItem}
            min={1}
            disabled
          />
          <span
            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
            onClick={() => dispatch(increase(item.productId))}
          >
            {" "}
            +{" "}
          </span>
        </div>
      </td>
      <td className="p-2">
        <div className="text-left font-medium text-green-500">
          ${item.quantity * item.price}
        </div>
      </td>
      <td className="p-2">
        <div className="flex justify-center">
          <button onClick={() => dispatch(removeProduct(item.productId))}>
            <svg
              className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
