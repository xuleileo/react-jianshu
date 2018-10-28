import axios from 'axios';
import * as constants from './constants';

const changeQrcodeData = (result) => ({
    type: constants.CHANGE_QRCODE_DATA,
    imgUrl: result.imgUrl,
    slogan: result.slogan
});

export const getQrcode = () => {
    return (dispatch) => {
        axios.get('/api/qrcode.json').then((res) => {
            if(res.data.success){
                const result = res.data.data;
                dispatch(changeQrcodeData(result));
            }else{
                console.log('获取公众号二维码页面信息失败~');
            }
        }).catch((error) => {
            console.log('服务器请求异常~');
        })
    }
}

