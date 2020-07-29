export const increment = (number) => {
  return {
    type: "GET_DATA",
    payload: number,
  };
};
export const updateCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};
