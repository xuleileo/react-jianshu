import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        console.log(loginStatus);
        if(loginStatus){
            return (
                <div>write</div>
            )
        }else{
            return <Redirect to='/login'></Redirect>
        }

    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login','login'])
})

export default connect(mapStateToProps,null)(withRouter(Write));