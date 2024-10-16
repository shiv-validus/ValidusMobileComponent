import { useEffect, useState, useMemo } from 'react';
import { I18nManager, Dimensions } from 'react-native';
import { calculateDropdownHeight } from '../helpers/calculateDropdownHeight';
import { useKeyboardRemainingScreenHeight } from './useKeyboardRemainingScreenHeight';
const { height } = Dimensions.get('window');

export const useLayoutDropdown = (
  data: any,
  dropdownStyle: any,
  rowStyle: any,
  search: any
) => {
  const [isVisible, setIsVisible] = useState(false); // dropdown visible ?
  const [buttonLayout, setButtonLayout] = useState<any>(null);
  const [dropdownPX, setDropdownPX] = useState(0); // position x
  const [dropdownPY, setDropdownPY] = useState(0); // position y
  const [dropdownHEIGHT, setDropdownHEIGHT] = useState(() => {
    return calculateDropdownHeight(
      dropdownStyle,
      rowStyle,
      data?.length || 0,
      search
    );
  }); // dropdown height
  const [dropdownWIDTH, setDropdownWIDTH] = useState(0); // dropdown width
  const remainigHeightAvoidKeyboard = useKeyboardRemainingScreenHeight();
  const safeDropdownViewUnderKeyboard =
    rowStyle && rowStyle.height ? rowStyle.height * 3 : 50 * 3;

  useEffect(() => {
    setDropdownHEIGHT(
      calculateDropdownHeight(
        dropdownStyle,
        rowStyle,
        data?.length || 0,
        search
      )
    );
  }, [dropdownStyle, rowStyle, data]);

  const onDropdownButtonLayout = (w: any, h: any, px: any, py: any) => {
    setButtonLayout({ w, h, px, py });
    if (height - 18 < py + h + dropdownHEIGHT) {
      setDropdownPX(px);
      setDropdownPY(py - 2 - dropdownHEIGHT);
    } else {
      setDropdownPX(px);
      setDropdownPY(py + h + 2);
    }
    setDropdownWIDTH(dropdownStyle?.width || w);
  };

  const getItemLayout = (flatlistData: any, index: any) => ({
    index,
    length: flatlistData?.length || 0,
    offset: rowStyle && rowStyle.height ? rowStyle.height * index : 50 * index,
  });

  const dropdownWindowStyle = useMemo(() => {
    const top =
      remainigHeightAvoidKeyboard < dropdownPY + safeDropdownViewUnderKeyboard
        ? remainigHeightAvoidKeyboard - safeDropdownViewUnderKeyboard
        : dropdownPY;
    return {
      ...{
        borderTopWidth: 0,
        overflow: 'hidden',
      },
      ...dropdownStyle,
      ...{
        position: 'absolute',
        top: top,
        height: dropdownHEIGHT,
        width: dropdownWIDTH,
      },
      ...(I18nManager.isRTL
        ? { right: dropdownStyle?.right || dropdownPX }
        : { left: dropdownStyle?.left || dropdownPX }),
    };
  }, [
    remainigHeightAvoidKeyboard,
    dropdownPY,
    safeDropdownViewUnderKeyboard,
    dropdownStyle,
    dropdownHEIGHT,
    dropdownWIDTH,
    dropdownPX,
  ]);

  const onRequestClose = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    setIsVisible,
    buttonLayout,
    onDropdownButtonLayout,
    getItemLayout,
    dropdownWindowStyle,
    onRequestClose,
  };
};
