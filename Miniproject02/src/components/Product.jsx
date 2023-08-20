import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct } from "../redux/quantity/actions";

export default function Product({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

//   const handleBuy = () => {
//     dispatch(buyProduct(listProducts, quantity))
//   }
//   const productsCart = JSON.parse(localStorage.stringify("productsCart")) || [];

  const increase = (stock) => {
    setQuantity(quantity + 1);
    if (quantity >= stock) {
      alert("Số lượng trong kho không đủ");
      setQuantity(stock);
      return;
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return;
    }
  };

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={item.image}
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">
            {item.productName}
          </h2>
          <p className="mt-1 text-sm text-gray-700 text-justify mr-4">
            {item.title}
          </p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={decrease}
            >
              {" "}
              -{" "}
            </span>
            <input
              className="h-8 w-10 border bg-white text-center text-xs outline-none"
              //   name={item.productName}
              name={item.productName}
              type="text"
              value={quantity}
              min={1}
              //   onChange={(e) => setQuantity(+e.target.value)}
              disabled
            />
            <span
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => increase(item.stock)}
            >
              {" "}
              +{" "}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">${item.price * quantity}</p>
            <div className="flex justify-center">
              <button
              onClick={() => dispatch(buyProduct(quantity, item))}
              >
                <ShoppingBagOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
