const cartgories = (state = "ALL", action) => {
    switch (action.type) {
      case "ADD_TO_CATER":
        return state = action.payload;
      default:
        return state;
    }
  };
  
  export default cartgories;