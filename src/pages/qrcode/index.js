import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { QrcodeWrapper } from './style';
import { actionCreators } from './store'

class Qrcode extends PureComponent {
    render() {
        const { imgUrl, slogan } = this.props;
        return (
            <QrcodeWrapper>
                <img alt='' className='qrcode' src={imgUrl} />
                <span className='slogan' >{ slogan }</span>
            </QrcodeWrapper>
        )
    }
    
    componentDidMount() {
        this.props.changeHomeData();
    }

}

const mapStateToProps = (state) => ({
    imgUrl: state.getIn(['qrcode','imgUrl']),
    slogan: state.getIn(['qrcode','slogan']),
})
const mapDispatchToProps = (dispatch) =>({
    changeHomeData(){
        dispatch(actionCreators.getQrcode());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Qrcode));