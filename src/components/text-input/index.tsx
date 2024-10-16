import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles'; // Ensure to define styles appropriately
import type { TextInputProps } from 'react-native';

interface TextInputWithPlaceholderProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  errorText?: string;
  helperText?: string;
  isActivated?: boolean; // Activation indicator
  height?: number | string; // Allow height to be passed
  width?: number | string; // Allow width to be passed
}

const TextInputWithPlaceholder: React.FC<TextInputWithPlaceholderProps> = ({
  multiline,
  value,
  onChangeText,
  placeholder,
  leadingIcon,
  trailingIcon,
  errorText,
  helperText,
  isActivated, // Default width if not provided
}) => {
  return (
    <View style={styles.container}>
      {/* Filled Container */}
      <View style={styles.filledContainer}>
        {/* Leading Icon */}
        {leadingIcon && <View style={styles.iconContainer}>{leadingIcon}</View>}

        <View style={styles.inputContainer}>
          <TextInput
            multiline={multiline}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={styles.placeholderColor.color}
            style={[
              styles.textInput,
              isActivated ? styles.activatedInput : null,
              errorText ? styles.errorInput : null,
            ]}
            secureTextEntry // Use secureTextEntry for password field
          />
          {/* Activation Indicator */}
          {isActivated && <View style={styles.activationIndicator} />}

          {/* Display Placeholder as Label */}
          {value.length > 0 && (
            <Text style={styles.placeholderText}>{placeholder}</Text>
          )}
        </View>

        {trailingIcon && (
          <TouchableOpacity style={styles.iconContainer}>
            {trailingIcon}
          </TouchableOpacity>
        )}
      </View>

      {/* Helper or Error Text */}
      {errorText ? (
        <Text style={styles.errorText}>{errorText}</Text>
      ) : (
        helperText && <Text style={styles.helperText}>{helperText}</Text>
      )}
    </View>
  );
};

export default TextInputWithPlaceholder;
