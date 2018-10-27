import { createGlobalStyle } from 'styled-components'

const IconFontstyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1540622722275'); /* IE9*/
    src: url('./iconfont.eot?t=1540622722275#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1540622722275') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1540622722275#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default IconFontstyle;
