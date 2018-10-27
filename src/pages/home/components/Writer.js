import React, {PureComponent} from 'react';
import { WriterWrapper } from '../style';
import Qrcode from '../../../statics/images/qrcode.jpg'
import { Link } from 'react-router-dom';
class Writer extends PureComponent {
    render() {
        return (
            <Link to='/qrcode'>
                <WriterWrapper>
                    <img alt='' className='qrcode' src={Qrcode} ></img>
                </WriterWrapper>
            </Link>

        )
    }
}

export default Writer;