import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router';

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号或手机号' ref={(input) => {this.account = input}}/>
                        <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'></Redirect>
        }

    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatchToProps = (dispatch) => ({
    login(accountElement,passwordElement){
        dispatch(actionCreators.login(accountElement.value,passwordElement.value));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));