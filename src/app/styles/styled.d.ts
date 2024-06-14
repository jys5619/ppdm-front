import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    font: {
      fontSize: number;
      fontFamily: string;
      fontWeight: string | number;
    };
    colors: {
      colorMain: string;
      colorBackground: string;
      colorControlBackground: string;
      colorControlBorder: string;
      colorControlFont: string;
      colorControlNormalBackground: string;
      colorControlNormalBorder: string;
      colorControlNormalFont: string;
      colorControlPrimaryBackground: string;
      colorControlPrimaryBorder: string;
      colorControlPrimaryFont: string;
      colorBorder: string;
      colorMainFont: string;
      colorMenuShdow: string;
      colorActive: string;
      colorEnactive: string;
      colorPointColor: string;
      colorBlue: string;
      colorDisabled: string;
      colorGray: string;
      colorDarkGray: string;
      colorWhite: string;
      colorRed: string;
      colorDiRed: string;
      colorShadow: string;
      colorDarkShadow: string;
    };
  }
}
