import { ADD_SUCCESS, DELETE_SUCCESS, READY_TO_BUY } from "./constant";

import { BUY, REMOVE } from "../quantity/constants";

// tiến hành cập nhấtk các sự kiện thêm, sửa, xoá với các notify tương ứng
const initState = READY_TO_BUY;
const notify = (state = initState, action) => {
  switch (action.type) {
    case BUY:
      state = ADD_SUCCESS;
      return state;
    case REMOVE:
      state = DELETE_SUCCESS;
      return state;
    default:
      return state;
  }
};

export default notify;
