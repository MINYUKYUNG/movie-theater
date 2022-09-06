type Colors = {
  RED: string;
  BLACK: string;
  GREY: string;
  MAIN: string;
  B100: string;
  B80: string;
  B60: string;
  B40: string;
  B20: string;
  WHITE: string;
  BACKGROUND: string;
  SIDE: string;
  HOVER: string;
};

type FontSize = {
  X_SMALL: string;
  SMALL: string;
  MEDIUM: string;
  SEMI_M: string;
  TITLE: string;
};

const colors: Colors = {
  RED: '#FF0000',
  BLACK: '#000000',
  GREY: '#415867',
  MAIN: '#FFB800',
  B100: '#312F2C',
  B80: '#626262',
  B60: '#A9A9A9',
  B40: '#CACACA',
  B20: '#E9E9E9',
  WHITE: '#FFFFFF',
  BACKGROUND: '#181818',
  SIDE: '#212121',
  HOVER: '#2D2D2D',
};

const fontSize: FontSize = {
  X_SMALL: '12px',
  SMALL: '14px',
  MEDIUM: '16px',
  SEMI_M: '21px',
  TITLE: '24px',
};

const theme = {
  colors,
  fontSize,
};

export default theme;
