import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  filledContainer: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.GRAY_7D0,
    borderRadius: 8, // Slightly increased radius for smoother edges
    paddingVertical: 10,
    paddingHorizontal: 15, // Increased padding for better spacing
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000', // Optional shadow for elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android shadow
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
  },
  textInput: {
    fontSize: 16,
    color: COLORS.BLACK_A0A,
    minHeight: 50, // Increased minimum height for comfort
    paddingVertical: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  activatedInput: {
    borderColor: COLORS.ACTIVATED_COLOR,
  },
  errorInput: {
    borderColor: COLORS.ERROR_COLOR,
  },
  activationIndicator: {
    position: 'absolute',
    top: -8,
    right: 10,
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: COLORS.ACTIVATED_COLOR,
  },
  placeholderText: {
    position: 'absolute',
    top: -12, // Adjusted for better positioning
    left: 10,
    fontSize: 12,
    color: COLORS.PRIMARY,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 2,
  },
  iconContainer: {
    marginRight: 10,
  },
  errorText: {
    color: COLORS.ACCENT_RED,
    marginTop: 5,
    fontSize: 12,
  },
  helperText: {
    color: COLORS.GRAY_69A,
    marginTop: 5,
    fontSize: 12,
  },
  placeholderColor: {
    color: COLORS.GRAY_7D0,
  },
});

export default styles;
