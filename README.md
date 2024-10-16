# react-native-validus-component-mobile

Common Components for ValidusFintech

## Installation

```sh
npm install react-nat-ive-validus-component-mobile
```

## Usage


```js
import { SelectDropdown } from 'react-native-validus-component-mobile';

// ...

import React, { useRef, useState } from 'react';
import { SelectDropdown } from 'react-native-validus-component-mobile';
import { View } from 'react-native';
import styles from './styles'; // Import your styles

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef();

  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleSelect = (selectedItem, index) => {
    console.log(`Selected: ${selectedItem} at index ${index}`);
    setSelectedOption(selectedItem);
  };

  const buttonTextAfterSelection = (selectedItem) => {
    return `You selected ${selectedItem}`;
  };

  const rowTextForSelection = (item, index) => {
    return `Row ${index + 1}: ${item}`;
  };

  return (
    <View>
      <SelectDropdown
        ref={dropdownRef}
        data={data}
        onSelect={handleSelect}
        defaultButtonText="Select an option"
        buttonTextAfterSelection={buttonTextAfterSelection}
        rowTextForSelection={rowTextForSelection}
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonText}
        dropdownStyle={styles.dropdown}
        rowStyle={styles.row}
        rowTextStyle={styles.rowText}
      />
    </View>
  );
};

export default MyComponent;

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
