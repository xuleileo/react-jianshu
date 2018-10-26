import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const addHomeList = (list,articlePage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    articlePage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            if(res.data.success){
                const result = res.data.data;
                dispatch(changeHomeData(result));
            }else{
                console.log('获取首页信息失败');
            }
        })
    }
}

export const getMoreList = (articlePage) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+articlePage).then((res) => {
            if(res.data.success){
                const result = res.data.data;
                dispatch(addHomeList(result,articlePage + 1));
            }else{
                console.log('获取首页信息失败');
            }
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})