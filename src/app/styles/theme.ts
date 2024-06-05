const commonTheme = {
  fontFamily: 'NanumGothicCoding',
  fontSize: 12,
}

// const container = {
// }

export const lightTheme = {
  ...commonTheme,
  colors: {
    colorMain: '#ffffff4d',
    colorBackground: '#F7F7FA',
    colorBorder: '#ccc',
    colorMainFont: '#000000',
    colorSkyBlue: '#E6F4FE',
    colorBlue: '#0057BC',
    colorDisabled: '#C4C4C4',
    colorGray: '#D9D9D9',
    colorDarkGray: '#a5a4a4',
    colorWhite: '#FFFFFF',
    colorRed: '#FC585A',
    colorDiRed: '#FE9090',
    colorShadow: '0 3px 6px rgba(0, 0, 0, .16)',
    colorDarkShadow: '0 3px 6px rgba(0, 0, 0, .5)',
  },
}

export const darkTheme = {
  ...commonTheme,
  colors: {
    colorMain: '#585D6E4d',
    colorBackground: '#1B1D25',
    colorBorder: '#555',
    colorMainFont: '#FAFAFA',
    colorSkyBlue: '#E6F4FE',
    colorBlue: '#3190ff',
    colorDisabled: '#C4C4C4',
    colorGray: '#D9D9D9',
    colorDarkGray: '#a5a4a4',
    colorWhite: '#FFFFFF',
    colorRed: '#FC585A',
    colorDiRed: '#FE9090',
    colorShadow: '0 4px 7px rgb(68 68 68 / .8)',
    colorDarkShadow: '0 3px 6px rgba(255, 255, 255, .5)',
  },
}
