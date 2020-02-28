import * as actionCreater from '../action/actionType';

const initialState = {
    counter: 0,
}
const counterReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionCreater.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case actionCreater.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case actionCreater.ADD:
            return {
                ...state,
                counter: state.counter + 10,
            }
        case actionCreater.SUBTRACT:
            return {
                ...state,
                counter: state.counter - 10,
            }
    }
    return state;
}

export default counterReducer;