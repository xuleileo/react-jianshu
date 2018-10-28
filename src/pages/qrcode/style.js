import styled from 'styled-components'

export const QrcodeWrapper = styled.div`
    overflow: hidden;
    width: 680px;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
    .qrcode {
        display: block;
        margin 0 auto;
        border: 1px solid #666;
        box-shadow: -5px 10px 2px #88888888;
    }
    .slogan{
        display: block;
        line-height: 50px;
        font-size: 25px;
        color: #666;
        margin-top: 20px;
    }
`