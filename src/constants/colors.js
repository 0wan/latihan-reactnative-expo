import { getColor } from 'tailwind-rn';
// import styles from 'styles.json'
// const {tailwind, getColor} = create(styles);
// export {tailwind, getColor};

export default {
  primary: getColor('indigo-500'),
  border: getColor('gray-200'),
  white: getColor('white'),
  gray: getColor('blue-500'),
  background: getColor('blue-50'),
  error: getColor('red-600'),

  light: {
    text: getColor('black'),
    background: getColor('white'),
    tint: getColor('blue-800'),
    tabIconDefault: getColor('gray-300'),
    tabIconSelected: getColor('blue-300'),
  },
  dark: {
    text: getColor('white'),
    background: getColor('black'),
    tint: getColor('white'),
    tabIconDefault: getColor('gray-300'),
    tabIconSelected: getColor('white'),
  },
};
