import {makeVar} from '@apollo/client';

export const userVar = makeVar({name: 'test', age: undefined, gender: 'test'});

export const userLocationVar = makeVar({
  x: 0,
  y: 0,
  address: '',
  si: '',
  gu: '',
  dong: '',
});

export const setUser = ($name, $age, $gender) => {
  userVar({name: $name, age: $age, gender: $gender});
};
export const setGeolocation = ($x, $y) => {
  userLocationVar({x: $x, y: $y});
};
export const setAddress = ($x, $y, $address, $si, $gu, $dong) => {
  userLocationVar({
    x: $x,
    y: $y,
    address: $address,
    si: $si,
    gu: $gu,
    dong: $dong,
  });
};
