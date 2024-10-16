import _ from 'lodash';

export const findIndexInArr = (obj: any, arr: any): number => {
  let defaultValueIndex = -1;

  if (typeof obj === 'object') {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (_.isEqual(element, obj)) {
        return index; // Return the index as soon as it's found
      }
    }
  } else {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element === obj) {
        return index; // Return the index as soon as it's found
      }
    }
  }

  return defaultValueIndex; // Always return a value, even if not found
};
