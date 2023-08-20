/* eslint-disable no-case-declarations */
// import { DECREASE, INCREASE } from "./constants";
// import { BUY } from "./constants";

//InitialState
export const initialState = [
  {
    productId: "P001",
    productName: "Nike Dunk Low Retro Premium",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fe72e417-c4e4-4013-a0a8-d45b039adc71/dunk-low-retro-premium-mens-shoes-20hjNd.png",
    title:
      "The '80s b-ball icon returns with classic details and throwback hoops flair. Channeling vintage style back onto the streets, its padded, low-cut collar lets you take your game anywhere—in comfort.",
    price: 120,
    stock: 10,
  },
  {
    productId: "P002",
    productName: "Air Jordan 3 Retro",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d091313b-2f40-452e-9073-cead74ff47aa/air-jordan-3-retro-mens-shoes-5M3ZlK.png",
    title:
      "Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon.",
    price: 200,
    stock: 2,
  },
  {
    productId: "P003",
    productName: "Air Jordan 2 Retro Low",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/85cb50eb-804c-46e1-8542-a8396a5fa597/air-jordan-2-retro-low-womens-shoes-cHpxKX.png",
    title:
      "Making its debut in 1986, the AJ2 was the cool younger sibling of its famous predecessor—a sleeker and more pared-down version of the iconic AJ1. With premium leather and a Nike Air-Sole unit underfoot, this throwback serves the ultimate combo of wearability and style.",
    price: 150,
    stock: 8,
  },
  {
    productId: "P004",
    productName: "Air Jordan 13 Retro",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af54be03-abf3-4668-b78e-09fa72f4d17c/air-jordan-13-retro-shoe-77XC9C.png",
    title:
      "The Air Jordan 13 Retro brings back the memorable game shoe that Michael Jordan wore during the '97-98 season, all the way to his 6th championship title. All the classic details are there like the quilted overlay, iconic sculpted midsole and holographic eye.",
    price: 200,
    stock: 6,
  },
];

//reducer
const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
