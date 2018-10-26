import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { 
    TopicWrapper,
    TopicItem,
    TopicMore
} from '../style';

class Topic extends PureComponent {

    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img alt='' className='topic_pic' src={item.get('imgUrl')}></img>
                            {item.get('title')}
                        </TopicItem>            
                    ))
                }
                <TopicMore>更多热门专题 > </TopicMore>


            </TopicWrapper>
        )
    }
}

// 从store里面拿数据
const mapStateToProps = (state) => ({
    list: state.getIn(['home','topicList'])
})


export default connect(mapStateToProps,null)(Topic);