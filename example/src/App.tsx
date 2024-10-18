import { View } from 'react-native';
import { useRef, useState } from 'react';
import TextInputWithPlaceholder from '../../src/components/text-input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from '../../src/components/selectDropdown/selectDropdown';
import styles from './styles';
import AccountSummaryCard from '../../src/components/AccountSummaryCard';

export default function App() {
  const [text, setText] = useState('');

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const dropdownRef = useRef();

  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  // Define types for your selected item and index
  type SelectedItemType = string; // Assuming selected item is of type string, modify if needed
  type IndexType = number; // Assuming index is a number

  const handleSelect = (
    selectedItem: SelectedItemType,
    index: IndexType
  ): void => {
    console.log(`Selected: ${selectedItem} at index ${index}`);
  };

  const buttonTextAfterSelection = (
    selectedItem: SelectedItemType,
    _index: IndexType
  ): string => {
    return `You selected ${selectedItem}`;
  };

  const rowTextForSelection = (
    item: SelectedItemType,
    index: IndexType
  ): string => {
    return `Row ${index + 1}: ${item}`;
  };

  const selectedAccountData = {
    account_holder_name: 'John Doe',
    account_number: '1234567890',
    fund_description: 'Equity Fund',
    plan_description: 'Growth',
    option_description: 'Direct',
  };

  const customStyles = {
    card: {
      backgroundColor: 'lightblue',
    },
    value: {
      color: 'darkgreen',
    },
  };

  return (
    <View style={styles.container}>
      <TextInputWithPlaceholder
        value={text}
        onChangeText={handleTextChange}
        placeholder="Password"
        leadingIcon={<MaterialIcons name="edit" color="#ff0000" size={14} />}
        trailingIcon={<MaterialIcons name="passwordgg" size={14} />}
        errorText={
          text.length < 5 ? 'Minimum 5 characters required' : undefined
        }
        helperText="This is some helper text."
        isActivated={false}
      />
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

      <AccountSummaryCard
        availableUnits={100978989080}
        availableBalance={1578568768}
        selectedAccountData={selectedAccountData}
        style={customStyles}
      />
    </View>
  );
}
