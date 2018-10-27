import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { QrcodeWrapper } from './style'
import QrcodeImageUrl from '../../statics/images/qrcode.jpg';

class Qrcode extends PureComponent {
    render() {
        return (
            <QrcodeWrapper>
                <img alt='' className='qrcode' src={QrcodeImageUrl} />
                <span className='desc' >觉得不错欢迎关注公众号~</span>
            </QrcodeWrapper>
        )
    }
}

export default connect(null,null)(withRouter(Qrcode));