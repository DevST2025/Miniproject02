import ListProducts from "../components/ListProducts";
import Cart from "../components/Cart";

export default function ShoppingCart() {
  return (
    <div className=" bg-gray-100 pt-20">

      {/* Header */}
      <div className=" flex justify-center align-middle">
        <h1 className="mb-10 text-center text-2xl font-bold">
          Miniproject - Shopping Cart
        </h1>
        <span className=" m-2">ReactJS</span>
      </div>

      <div>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <ListProducts />
          <Cart />
        </div>
      </div>
    </div>
  );
}
