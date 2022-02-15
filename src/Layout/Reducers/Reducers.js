const initialState = {
  countryName: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGING") {
    return {
      countryName: action.val.target.value,
    };
  }

  return state;
};

export default reducer;
