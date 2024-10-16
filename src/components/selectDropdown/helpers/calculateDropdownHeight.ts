import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
const DROPDOWN_MAX_HEIGHT = height * 0.4;

export const calculateDropdownHeight = (
  dropdownStyle: any,
  rowStyle: any,
  dataLength: any,
  search: any
) => {
  if (dropdownStyle && dropdownStyle.height) {
    return dropdownStyle.height;
  } else {
    if (dataLength === 0) {
      return 150;
    } else {
      const count = search ? dataLength + 1 : dataLength;
      if (rowStyle && rowStyle.height) {
        const _height = rowStyle.height * count;
        return _height < DROPDOWN_MAX_HEIGHT ? _height : DROPDOWN_MAX_HEIGHT;
      } else {
        const _height = 50 * count;
        return _height < DROPDOWN_MAX_HEIGHT ? _height : DROPDOWN_MAX_HEIGHT;
      }
    }
  }
};
