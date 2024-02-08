const initialstate = {
  userdata: [],
  usercarddata: [],
};

export const userdetails = (state = initialstate, action) => {
  switch (action.type) {
    case `ADD_DATA`: {
      const updateddata = action.payload.map((item) => ({
        ...item,
        status: "Inactive",
        access: "Manager",
      }));

      return {
        ...state,
        userdata: updateddata,
      };
    }

    case `UPDATE_DATA`: {
      const updateddata = state.userdata.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            status: action.status,
            access: action.access,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        userdata: updateddata,
      };
    }

    case `DELETE_DATA`: {
      const updateddata = [...state.userdata];
      updateddata.splice(action.index, 1);

      return {
        ...state,
        userdata: updateddata,
      };
    }

    case `SHOW_CARD`: {
      const data = [...state.userdata];
      let updatedcarddata = data[action.index];

      return {
        ...state,
        usercarddata: updatedcarddata,
      };
    }

    default:
      return state;
  }
};
