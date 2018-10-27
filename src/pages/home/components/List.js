import React, { PureComponent, Fragment } from 'react';
import { 
    ListItem,
    ListInfo,
    LoadMore
} from '../style';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, getMoreList, articlePage } = this.props;
        return (
            <Fragment>
                {
                    list.map((item,index) => {
                        return (
                            <Link key={index} to={'/detail/'+item.get('id')}>
                                <ListItem key={index}>
                                    <img alt='' className='pic' src={item.get('imgUrl')}></img>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(articlePage)}>
                    阅读更多
                </LoadMore>
            </Fragment>
            
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','articleList']),
    articlePage: state.getIn(['home','articlePage'])
})

const mapDispatchToProps = (dispatch) =>({
    getMoreList(articlePage){
        dispatch(actionCreator.getMoreList(articlePage));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);