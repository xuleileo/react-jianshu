import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
    }]
})

export default (state = defaultState , action) => {
    switch(action.type){
        default:
            return state;
    }
}