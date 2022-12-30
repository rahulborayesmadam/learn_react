const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "SET_API_DATA":
      const featureData = action.payload.filter(
        (curElem) => curElem.featured === true
      );
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        featureProducts: featureData,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default userReducer;
