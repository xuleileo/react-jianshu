import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreator } from './store';
import { 
    HomeWrapper,
    Homeleft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <HomeWrapper>
                <Homeleft>
                    <img alt='' className='banner-img' src='http://upload.jianshu.io/admin_banners/web_images/4514/bf753d6adbb8da040052b46492f41432d9eb1a0f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'></img>
                    <Topic></Topic>
                    <List></List>
                </Homeleft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><i className='iconfont a'>&#xe65d;</i></BackTop> : null
                }
                
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvent();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatchToProps = (dispatch) =>({
    changeHomeData(){
        const action = actionCreator.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(e){
        document.documentElement.scrollTop > 400 ? dispatch(actionCreator.toggleTopShow(true)) : dispatch(actionCreator.toggleTopShow(false));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home));