const TotalPrice = (state = [], action) => {
    switch (action.type) {
      case "UPDATE_TOTAL_PRICE":
        return [action.payload];
      default:
        return state;
    }
  };
  
  export default TotalPrice;
  