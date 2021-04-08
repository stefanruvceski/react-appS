export const reducer = (state, action) => {
  switch (action.type) {
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false, modalContent: '' };
    case 'ADD_NAME':
      return { ...state, people: [...state.people,action.payload], isModalOpen: true, modalContent: "item added" };
    case 'REMOVE_NAME':
      return {...state,people:state.people.filter((p) => p.id !== action.payload),isModalOpen:true,modalContent:'Name removed'}
    case 'NO_VALUE':
      return { ...state, isModalOpen: true, modalContent: 'Please enter value' };
    default:
      return state;
   }
}