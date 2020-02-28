import * as actionCreater from '../action/actionType';

const initialState = {
    result: [],
    counter: 0,
}
const resReducer = (state = initialState, action) =>{
    console.log(action)
    switch(action.type){
        case actionCreater.ADD_RESULT:
            return {
                ...state,
                result: state.result.concat(action.result),
            }
    }
    return state;
}

export default resReducer;