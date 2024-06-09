import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      fontSize: number
      fontFamily: string
      fontWeight: string | number
    }
    colors: {
      colorMain: string
      colorBackground: string
      colorBorder: string
      colorMainFont: string
      colorSkyBlue: string
      colorBlue: string
      colorDisabled: string
      colorGray: string
      colorDarkGray: string
      colorWhite: string
      colorRed: string
      colorDiRed: string
      colorShadow: string
      colorDarkShadow: string
    }
  }
}
