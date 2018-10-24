import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreator';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'
// import { bindActionCreators } from 'redux';

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active' >首页</NavItem>
                <NavItem className='left' >下载APP</NavItem>
                <NavItem className='right' >登录</NavItem>
                <NavItem className='right' >
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition 
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'} >&#xe69d;</i>
                </SearchWrapper>
                
            </Nav>
            <Addition>
                <Button className='writting'>
                    <i className='iconfont'>&#xe624;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);