const initialstate = {
  userdata: [],
};

export const userdetails = (state = initialstate, action) => {
  switch (action.type) {
    case `ADD_DATA`:
      const updateddata = action.payload.map((item) => ({
        ...item,
        active: false,
        designation: "Manager",
      }));
      
      return {
        ...state,
        userdata: updateddata
      };

    default:
      return state;
  }
};
