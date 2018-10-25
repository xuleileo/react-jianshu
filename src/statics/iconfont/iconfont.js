import { createGlobalStyle } from 'styled-components'

const IconFontstyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1540470389279'); /* IE9*/
    src: url('./iconfont.eot?t=1540470389279#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXUAAsAAAAACHwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8mkpDY21hcAAAAYAAAABsAAABstQhnrVnbHlmAAAB7AAAAdkAAAIU6j/ugWhlYWQAAAPIAAAALwAAADYTDvLnaGhlYQAAA/gAAAAcAAAAJAfeA4ZobXR4AAAEFAAAAA4AAAAUFAAAAGxvY2EAAAQkAAAADAAAAAwA/gGGbWF4cAAABDAAAAAfAAAAIAETADxuYW1lAAAEUAAAAUUAAAJtPlT+fXBvc3QAAAWYAAAAPAAAAE2Zg2uReJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeqbwIZG7438AQw9zA0AAUZgTJAQDmRAxaeJztkbENgDAMBM8kIIQYg5KamhXYg4p9WM9iC/jEFAzBRxfZr48LB2iBJGaRwQ6Mol2uVT8xVD+zqh/oaWh88sXPa7tv+NavTLk4KJ30VrOs49dY7/XtctleoD3hS1B+xM+gZK4twB5IfRo7eJxdUTtr21AUPufeSJdAcAy2JNs4Jta1pSYtkrAetwRsK2CbhtKOpaQvMNRDCl2UwaOhBDJn7NAhXQ0ZQoYODe7QIdAupkMgS39Bf4Gt9Nptl3LgPL/DdzgfEIDbEZUGWagCIKuglkEWMiNsoQgsd1nmdUM4uOhoZLbvePTieDS6nCud2dLHf1rk875zuHt8QePRKFbml89O3/2N8b8BrEi+c3pF92ANclCCuuQ0VYa0ji0MHZTUXPiaCAOboyGYLYJIVNBQqVlrGvNpF33i6UXyYn5z4punlvYeJ+eP3TPXvRv2kNG9oj7/ln7vEmE0a53nsxvTP/lY/KAhTs4eSRgxKfbCneUdt3RCARisQw1cgCq3q4yjn6OWzVVGlchvbCAPucpNKwzaGHCTGRnU8rrfiJpIJoMH6XX3Na73O28UlSjsAK+9VnIfq7uOOHgZ77iv7mxsluredEoh3cJ21uK59ItSPvzqRt7Wk8zaw/pTpVzUyo16BQAWWvygY3oPMmDJv1ibTM0a+oowhB0RKnVQTdtB2wqEVCJqGPIvep78GqZXwyRJcHs45uPBaq/Ub7eOmnG/VCiU+nHzqNWWKfmUJAvg29WBRA1xO/35H6Kw3AP4DX+IgD0AAAB4nGNgZGBgAOIvi1x3xvPbfGXgZmEAgevfr5ci6P8NLAzMDUAuBwMTSBQAbZEMiQB4nGNgZGBgbvjfwBDDwgACQJKRARWwAgBHCwJueJxjYWBgYEHDAAEEABUAAAAAAAAAOAB8AMYBCnicY2BkYGBgZTBgYGEAASYg5gJCBob/YD4DAA3dAVAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAlZGJkZmRhZGVkY2BpbggM487Mzk/rzi1xMDQ2JzJMZEzNzE9LzMtM7WIgQEAsSkKEw==') format('woff'),
    url('./iconfont.ttf?t=1540470389279') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1540470389279#iconfont') format('svg'); /* iOS 4.1- */
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
