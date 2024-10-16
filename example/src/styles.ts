import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#aaff', // Blue background color
    borderRadius: 8, // Rounded corners
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 16, // Horizontal padding
    borderWidth: 1, // Border width
    borderColor: '#ddd', // Light border color
    alignItems: 'center', // Center the text
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16, // Font size for button text
    fontWeight: 'bold', // Bold font weight
  },
  dropdown: {
    backgroundColor: '#f9f9f9', // Light background color
    borderRadius: 8, // Rounded corners for dropdown
    borderWidth: 1, // Border width
    borderColor: '#ccc', // Light grey border color
    marginTop: 8, // Space between button and dropdown
  },
  row: {
    backgroundColor: '#fff', // White background for rows
    paddingVertical: 10, // Vertical padding for rows
    paddingHorizontal: 16, // Horizontal padding for rows
    borderBottomWidth: 1, // Bottom border for rows
    borderColor: '#eee', // Light grey border color
  },
  rowText: {
    color: '#333', // Dark grey text color for row items
    fontSize: 14, // Font size for row text
  },
});

export default styles;
