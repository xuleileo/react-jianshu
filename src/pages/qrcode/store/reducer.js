import { fromJS } from 'immutable'; 
import * as constants from './constants';

const defaultState = fromJS({
    imgUrl: '',
    slogan: ''
})

const changeQrcodeData = (state,action) => {
    return state.merge({
        imgUrl: action.imgUrl,
        slogan: action.slogan
    })
}

export default (state = defaultState , action) => {
    switch(action.type){
        case constants.CHANGE_QRCODE_DATA:
            return changeQrcodeData(state,action);
        default:
            return state;
    }
}