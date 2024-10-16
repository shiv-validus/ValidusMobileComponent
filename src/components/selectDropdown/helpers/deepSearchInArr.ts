const contains = (item: any, searchTxt: any) => {
  // item is an object
  if (typeof item === 'object' && item != null) {
    for (let key in item) {
      const value = item[key];
      if (contains(value, searchTxt)) {
        return true;
      }
    }
  }
  // string, number or boolean
  if (typeof item !== 'object' && item != null && item != undefined) {
    const itemStringfied = item.toString().toLowerCase();
    const searchTxtStringfied = searchTxt.toString().toLowerCase();
    if (itemStringfied.includes(searchTxtStringfied)) {
      return true;
    }
  }
  return false;
};

export const deepSearchInArr = (query: any, arr: any) => {
  // handle edge cases
  if (!arr || !query) {
    return [];
  }

  // use filter to get elements that pass the contains test
  return arr.filter((item: any) => contains(item, query));
};
