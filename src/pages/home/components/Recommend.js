import React, {PureComponent} from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item,index) => {
                        return (
                            <RecommendItem key={index} imgUrl={item.get('imgUrl')}></RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','recommendList'])
})

export default connect(mapStateToProps,null)(Recommend);