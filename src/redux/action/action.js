import * as actionCreater from './actionType';

export const increment = () =>{
    return {
        type: actionCreater.INCREMENT,
    }
}

export const decrement = () =>{
    return {
        type: actionCreater.DECREMENT,
    }
}

export const add = (val) =>{
    return {
        type: actionCreater.ADD,
        value: val,
    }
}

export const subtract = (val) =>{
    return {
        type: actionCreater.SUBTRACT,
        value: val,
    }
}

export const saveResult = (res) =>{
    return {
        type: actionCreater.ADD_RESULT,
        result: res,
    }
}

export const addResult = (result) =>{
    return dispatch => {
        setTimeout(() =>{
            dispatch(saveResult(result))
        }, 2000);
    }
}