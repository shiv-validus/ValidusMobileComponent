import { useState, useEffect, useMemo } from 'react';
import { deepSearchInArr } from '../helpers/deepSearchInArr';
import { findIndexInArr } from '../helpers/findIndexInArr';
import { isExist } from '../helpers/isExist';

export const useSelectDropdown = (
  data: any,
  defaultValueByIndex: any,
  defaultValue: any,
  disabledInternalSearch: any
) => {
  const [selectedItem, setSelectedItem] = useState(null); // selected item from dropdown
  const [selectedIndex, setSelectedIndex] = useState(-1); // index of selected item from dropdown
  const [searchTxt, setSearchTxt] = useState('');

  // data array changes
  useEffect(() => {
    if (!data || data.length == 0) {
      reset();
    }
  }, [data]);

  // default value by index added or changed
  useEffect(() => {
    // defaultValueByIndex may be equals zero
    if (isExist(defaultValueByIndex)) {
      if (data && isExist(data[defaultValueByIndex])) {
        selectItem(defaultValueByIndex);
      }
    }
  }, [defaultValueByIndex]);
  // default value added or changed
  useEffect(() => {
    // defaultValue may be equals zero
    if (isExist(defaultValue)) {
      if (data) {
        const index: any = findIndexInArr(defaultValue, data);
        if (index >= 0) selectItem(index);
      }
    }
  }, [defaultValue]);

  const dataArr = useMemo(() => {
    if (disabledInternalSearch) {
      return data;
    }
    return searchTxt ? deepSearchInArr(searchTxt, data) : data;
  }, [data, searchTxt]);

  const selectItem = (index: any) => {
    setSelectedItem(data[index]);
    setSelectedIndex(index);
  };

  const reset = () => {
    setSelectedItem(null);
    setSelectedIndex(-1);
  };

  return {
    dataArr,
    selectedItem,
    selectedIndex,
    selectItem,
    reset,
    searchTxt,
    setSearchTxt,
  };
};
