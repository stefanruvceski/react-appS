import * as ActionTypes from './ActionTypes'

export const Comments = (state={
    errMessage: null,
    comments: []
    },action) =>{
    switch (action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return{...state, comments: state.comments.concat(comment)};

        case ActionTypes.ADD_COMMENTS:
            return {...state,errMessage:null,comments:action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state,  errMessage: action.payload, comments:[]};

        default:
            return state;
    }
}


