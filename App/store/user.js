import {makeVar} from '@apollo/client';

export const userVar = makeVar({name: 'test', age: undefined, gender: 'test'});

export const setUser = ($name, $age, $gender) => {
  userVar({name: $name, age: $age, gender: $gender});
};
