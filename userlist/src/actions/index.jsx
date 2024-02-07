export const ADD_DATA = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};

export const UPDATE_DATA = (selectedId, activestatus, accessStatus) => {
  return {
    type: "UPDATE_DATA",
    id: selectedId,
    status: activestatus,
    access: accessStatus
  };
};

export const DELETE_DATA = (index) => {
  return{
    type: "DELETE_DATA",
    index: index,
  }
}

export const SHOW_CARD = (index)=>{
  return{
    type: "SHOW_CARD",
    index: index
  }
}
